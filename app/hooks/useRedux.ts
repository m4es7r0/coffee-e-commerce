import { useMemo } from "react";

import { actions } from "@/store/slices/cart.slice";
import { AppDispatch, RootState } from "@/store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootActions = {
  ...actions,
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
