import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    videos: [],
    likedVideos: [],
    watchedVideos: [],
    watchLaterVideos: [],
    subscribedVideos: [],
    searchQuery: "",
    sidebarSelected: "Home",
    homeClicked: false,
    isDarkTheme: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    openMenu: (state) => {
      state.isMenuOpen = true;
    },

    setSearchVideos: (state, action) => {
      state.searchQuery = action.payload;
    },

    setVideosData: (state, action) => {
      state.videos.push(...action.payload);
    },

    setLikedVideos: (state, action) => {
      state.likedVideos.push(action.payload);
    },

    setWatchedVideos: (state, action) => {
      state.watchedVideos.push(action.payload);
    },

    setWatchLaterVideos: (state, action) => {
      state.watchLaterVideos.push(action.payload);
    },

    setSubscribedVideos: (state, action) => {
      state.subscribedVideos.push(action.payload);
    },

    setHome: (state) => {
      state.homeClicked = !state.homeClicked;
    },

    setDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },

    setSidebarSelected: (state, action) => {
      state.sidebarSelected = action.payload;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  setHome,
  setSidebarSelected,
  setVideosData,
  setLikedVideos,
  setWatchedVideos,
  setWatchLaterVideos,
  setSubscribedVideos,
  setDarkTheme,
  setSearchVideos,
} = appSlice.actions;
export default appSlice.reducer;
