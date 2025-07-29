'use client'
import { TableList } from '@/components/DataTable/Table'
import React, { useEffect, useState } from 'react'
import { UserColumn } from './userColumn'
import { FormProvider, useForm } from 'react-hook-form'
import { SelectInput } from '@/components/share/form/SelectInput'
import { LengthData, order, ShortBy } from '@/components/StaticValue'
import DeleteDialogBox from '@/components/Modal/Delete'

const AllUsers = () => {
    const [list, setList] = useState([])
    const [limit, setLimit] = useState(10)
    const [totalRecord, setTotalRecord] = useState([])
    const [page, setPage] = useState(1)
    const [deleteOpenModal, setDeleteOpenModal] = useState(false)
    const [deleteIndexId, setDeleteIndexId] = useState(null)
    const form = useForm()
    const shortBY = form.watch('shortBY')

    const Order = form.watch('order')
    const fetchUserData = async (page = 1, currentLimit = limit, sortBy = shortBY, orderBy = Order || 'asc') => {
        try {
            const skip = (page - 1) * currentLimit;
            const response = await fetch(`https://dummyjson.com/users?limit=${currentLimit}&skip=${skip}&value=Brown&sortBy=${sortBy}&order=${orderBy}`);
            const data = await response.json();
            setTotalRecord(data?.total || 0);
            setList(data?.users || []);
        } catch (error) {
            console.error('Failed to fetch users', error);
        }
    };

    useEffect(() => {
        fetchUserData(page, limit, shortBY, Order)
    }, [page, limit, shortBY, Order])
    useEffect(() => {
        const subscription = form.watch((value) => {
            if (value?.limit) {
                const newLimit = parseInt(value.limit);
                setLimit(newLimit);
                setPage(1);
            }
        });
        return () => subscription.unsubscribe();
    }, [form]);
    const onDelete = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/users/${deleteIndexId}`, {
                method: 'DELETE',
            })
            const data = await response.json();
            fetchUserData(page, limit, shortBY, Order)
            setDeleteOpenModal(false)
        } catch (error) {
            console.error('Failed to fetch users', error);
        }
    }
    const handleDeleteUser = (row) => {
        setDeleteOpenModal(true)
        setDeleteIndexId(row?.original?.id)
    }
    const deleteHandleModalClose = () => {
        setDeleteOpenModal(false)
    }

    return (
        <>
            <div>
                <div className='mb-2'>
                    <FormProvider {...form}>
                        <div className='grid grid-cols-3 gap-4'>
                            <SelectInput
                                form={form}
                                name='limit'
                                className='h-10 w-28'
                                placeholder='Select Limit'
                                label='Limit'
                                options={LengthData}
                            />
                            <SelectInput
                                form={form}
                                name='shortBY'
                                className='h-10 w-28'
                                placeholder='Short By'
                                label='Short By'
                                options={ShortBy}
                            />
                            <SelectInput
                                form={form}
                                name='order'
                                className='h-10 w-28'
                                placeholder='Order'
                                label='Order '
                                options={order}
                            />
                        </div>
                    </FormProvider>
                </div>
                <TableList
                    data={list}
                    columns={UserColumn(handleDeleteUser)}
                    length={limit}
                    totalRecord={totalRecord}
                    page={page}
                    setPage={setPage}
                />

                <DeleteDialogBox
                    onDelete={onDelete}
                    description='Are you certain you want to proceed with this deletion?'
                    deleteOpenModal={deleteOpenModal}
                    deleteHandleModalClose={deleteHandleModalClose}

                />
            </div>
        </>
    )
}

export default AllUsers
