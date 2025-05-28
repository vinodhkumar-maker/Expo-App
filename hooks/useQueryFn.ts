import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FormData } from './apiTypes';


 export const useSubmitUser = () => {
       return  useMutation({
        mutationFn: async (user: FormData) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (user.name && user.password) {
                        resolve({ message: 'User created successfully', user: user });
                    } else {
                        reject(new Error('Invalid user data'));
                    }
                }, 1000);
            });
        },
    })
}

export const useGetProductData = () => {
    return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
       const res= await axios.get('https://fakestoreapi.com/products');
       
         if (res.status !== 200) {
              throw new Error('Network response was not ok');
         }
            return res.data;
    }
});
}

export const useFetchProductItem = (productId?:number) => {
  return useQuery({
    queryKey: ['product',productId],
    queryFn: async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      if (res.status !== 200) {
        throw new Error('Network response was not ok');
      }
      return res.data;
    },
    enabled: !!productId, 
    refetchOnWindowFocus: false, 
  });
};


