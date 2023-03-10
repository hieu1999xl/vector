import { LoginRequest } from '../types/User';
import { useMutation, useQuery } from '@tanstack/react-query'
import { RegisterRequest } from '../types'
import { MainService } from './api'


export const QUERY_KEYS = {
  useGetProfile: ['MainService.useGetProfile'],
};

export const useRegisterAccount = () => {
  return useMutation((payload: RegisterRequest) => {
    return MainService.register(payload);
  });
};
export const useLoginAccount = () => {
  return useMutation((payload: LoginRequest) => {
    return MainService.login(payload);
  });
};

export const useForgotPassword = () => {
  return useMutation((payload: { email: string }) => {
    return MainService.forgotPassword(payload);
  });
};

export const useChangePassword = () => {
  return useMutation((payload: { code: string, password: string, password2: string }) => {
    return MainService.changePassword(payload);
  });
};


export const useGetProfile = () => {
  return useQuery(QUERY_KEYS.useGetProfile, () => {
    return MainService.getProfile()
  })
}
