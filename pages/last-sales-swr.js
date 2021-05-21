import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const { data, error } = useSWR('https://nextjs-course-byakina-default-rtdb.europe-west1.firebasedatabase.app/sales.json');

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume})
      }
      setSales(transformedSales);
    }
  }, [data])
    
  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return <ul>
    {sales.map((sale) => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
  </ul>;
}

export default LastSalesPage;
