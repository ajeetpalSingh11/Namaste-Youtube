const GOOGLE_API_KEY = "AIzaSyBT-pq4QmhO74v0UVxSN6hddvehiZlvU9I";

export const LIVE_CHAT_OFFSET = 10;

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGESSTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&order=relevance&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_ICON =
  "https://static.vecteezy.com/system/resources/thumbnails/003/206/623/small_2x/youtube-editorial-app-icon-free-vector.jpg";

export const YOUTUBE_DARK_ICON =
  "https://cdn.appuals.com/wp-content/uploads/2020/03/youtube_logo_dark.jpg.webp";

export const HOME_ICON =
  "https://assets.dryicons.com/uploads/icon/svg/4152/home.svg";

export const SUBSCRIPTIONS_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/4250/icon_grid_1x_film.png";

export const LIVE_ICON =
  "https://assets.dryicons.com/uploads/icon/svg/6615/356cd937-41b9-4551-b624-f0f7afcc5c6d.svg";

export const LIBRARY_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/4250/icon_grid_1x_film.png";

export const SEARCH_ICON =
  "https://assets.dryicons.com/uploads/icon/svg/4178/search.svg";

export const USER_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/4207/icon_grid_1x_user.png";

export const HISTORY_ICON =
  "https://assets.dryicons.com/uploads/icon/svg/2682/clock.svg";

export const WATCH_LATER_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/4156/icon_grid_1x_speedometer.png";

export const LIKED_VIDEOS_ICON =
  "https://assets.dryicons.com/uploads/icon/svg/4229/like.svg";

export const TRENDING_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/13068/small_1x_813c2d5a-6b6d-4fa7-afc7-47a5580ed298.png";

export const MUSIC_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/4174/small_1x_music_note.png";

export const MOVIES_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/12752/small_1x_342c1115-c259-4e1f-8bdf-e8d6b4a9bdfc.png";

export const SPORTS_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/6348/small_1x_91c15fde-2a34-4bf0-9cf3-56ecfc689005.png";

export const DARK_THEME_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/4215/icon_grid_1x_magic_wand.png";

export const CHANNEL_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/8413/small_1x_95a3ac6f-9b81-47d6-9aaa-e3b120a76f43.png";

export const LIKE_ICON =
  "https://assets.dryicons.com/uploads/icon/preview/6625/small_1x_4d460f06-5a22-4431-81f7-d7fbcf746766.png";

//Sample Comments Data
// const commentsData = [
//   {
//     name: "Akshay Saini",
//     text: "Lorem Ipsem dolar sit in the bank",
//     replies: [
//       {
//         name: "Akshay Saini",
//         text: "Lorem Ipsem dolar sit in the bank",
//         replies: [
//           {
//             name: "Akshay Saini",
//             text: "Lorem Ipsem dolar sit in the bank",
//             replies: [
//               {
//                 name: "Akshay Saini",
//                 text: "Lorem Ipsem dolar sit in the bank",
//                 replies: [
//                   {
//                     name: "Akshay Saini",
//                     text: "Lorem Ipsem dolar sit in the bank",
//                     replies: [
//                       {
//                         name: "Akshay Saini",
//                         text: "Lorem Ipsem dolar sit in the bank",
//                         replies: [],
//                       },
//                     ],
//                   },
//                   {
//                     name: "Akshay Saini",
//                     text: "Lorem Ipsem dolar sit in the bank",
//                     replies: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem Ipsem dolar sit in the bank",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem Ipsem dolar sit in the bank",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem Ipsem dolar sit in the bank",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem Ipsem dolar sit in the bank",
//     replies: [],
//   },
// ];

//Sample Videos Data

// const [videos, setVideos] = useState([
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
//   {
//     kind: "youtube#searchResult",
//     etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Amykv1hEk5vzuqlcAS8z2BEptrU"',
//     id: {
//       kind: "youtube#video",
//       videoId: "CWYDxh7QD34",
//     },
//     snippet: {
//       publishedAt: "2014-09-02T16:52:33.000Z",
//       channelId: "UCblfuW_4rakIf2h6aqANefA",
//       title: "Best surfing action from Red Bull Cape Fear 2014",
//       description:
//         "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
//       thumbnails: {
//         default: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
//           width: 120,
//           height: 90,
//         },
//         medium: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
//           width: 320,
//           height: 180,
//         },
//         high: {
//           url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
//           width: 480,
//           height: 360,
//         },
//       },
//       channelTitle: "Red Bull",
//       liveBroadcastContent: "none",
//     },
//   },
// ]);
