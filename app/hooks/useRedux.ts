import { useMemo } from "react";

import { actions as CartActions } from "@/store/slices/cart.slice";
import { actions as CatalogActions } from "@/store/slices/catalog.slice";

import { AppDispatch, RootState } from "@/store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootActions = {
  ...CartActions,
  ...CatalogActions
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
