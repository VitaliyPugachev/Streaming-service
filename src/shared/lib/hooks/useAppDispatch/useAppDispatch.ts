import {AppDispatch} from "app/providers/storeProvider/store/store";
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

