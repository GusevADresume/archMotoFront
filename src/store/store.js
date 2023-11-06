import {create} from "zustand";
import { devtools } from "zustand/middleware";
import api from "./api";

const useTextAndImgCarousel = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async (page) => {
      set({ loading: true });
      try {
        const resp = await api.get(`/text_and_img_carousel/${page}`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);

const useBigCarousel = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async (page) => {
      set({ loading: true });
      try {
        const resp = await api.get(`/big_carousel/${page}`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);

const useKeySpec = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async (page) => {
      set({ loading: true });
      try {
        const resp = await api.get(`/key_spec/${page}`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);

const useFullSpec = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async (page) => {
      set({ loading: true });
      try {
        const resp = await api.get(`/spec_data/${page}`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);

const useNewsList = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async () => {
      set({ loading: true });
      try {
        const resp = await api.get(`/news_list/`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);

const useSingleNews = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async (id) => {
      set({ loading: true });
      try {
        const resp = await api.get(`/news/${id}`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);

const useMotoCarousel = create(
  devtools((set, get) => ({
    content: {},
    loading: true,
    error: null,
    addContent: (block) => {
      set({ content: [...get.content, block] });
    },
    setLoad:(status)=>{
      set({ loading: false });
    },
    fetchBlock: async () => {
      set({ loading: true });
      try {
        const resp = await api.get(`/moto_carousel/`);
        set({ content: resp.data, error: null });
      } catch (error) {
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
  }))
);


export {useKeySpec, useBigCarousel, useTextAndImgCarousel, useFullSpec, useNewsList, useSingleNews, useMotoCarousel};
