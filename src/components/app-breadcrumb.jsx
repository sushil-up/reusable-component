'use client'

import { usePathname } from "next/navigation"
import React, { useContext, useEffect, useMemo, useState } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"


export function AppBreadcrumb() {
  const pathname = usePathname()
  // const userContext = useContext(UserContext)

  // if (!userContext) {
  //   throw new Error('UserContext is undefined. Make sure it is wrapped in a provider.')
  // }

  // const { breadcrumbData, setBreadCrumbsData } = userContext

  // useEffect(() => {
  //   if (pathname !== '/dashboard/contract/edit' && pathname !== '/dashboard/workorders/edit') {
  //     setBreadCrumbsData('')
  //   }
  // }, [pathname, setBreadCrumbsData])

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const pathName = usePathname()

  const breadcrumbs = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean)
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
      const text = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return {
        text,
        path,
        isLast: index === segments.length - 1
      }
    })
  }, [pathname])

  // Now the early return is safe
  if (pathName === '/login' || !mounted || breadcrumbs.length === 0) {
    return null
  }



  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className='flex-wrap'>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <BreadcrumbItem
                className={`flex-none ${index === 0 ? 'hidden md:flex' : 'flex'}`}
              >
                <BreadcrumbLink href={breadcrumb.path} className='truncate'>
                  {breadcrumb.text}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator className='mx-2' />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>


    </>
  )
}
