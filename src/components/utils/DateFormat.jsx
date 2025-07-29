export function FormatDate(date) {
    const d = new Date(date);
  
    if (isNaN(d.getTime())) return ''; 
  
    const pad = n => (n < 10 ? '0' + n : n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }