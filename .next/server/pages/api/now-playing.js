"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/now-playing";
exports.ids = ["pages/api/now-playing"];
exports.modules = {

/***/ "(api)/./src/lib/spotify.js":
/*!****************************!*\
  !*** ./src/lib/spotify.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNowPlaying\": () => (/* binding */ getNowPlaying),\n/* harmony export */   \"getTopTracks\": () => (/* binding */ getTopTracks),\n/* harmony export */   \"getRecentTracks\": () => (/* binding */ getRecentTracks)\n/* harmony export */ });\nconst client_id = process.env.SPOTIFY_CLIENT_ID;\nconst client_secret = process.env.SPOTIFY_CLIENT_SECRET;\nconst refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString(\"base64\");\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst getAccessToken = async ()=>{\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: new URLSearchParams({\n            grant_type: \"refresh_token\",\n            refresh_token\n        }).toString()\n    });\n    return response.json();\n};\nconst NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;\nconst getNowPlaying = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(NOW_PLAYING_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\nconst TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;\nconst getTopTracks = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(TOP_TRACKS_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\nconst RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;\nconst getRecentTracks = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(RECENTLY_PLAYED_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Nwb3RpZnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsS0FBSyxDQUFDQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7QUFDL0MsS0FBSyxDQUFDQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxxQkFBcUI7QUFDdkQsS0FBSyxDQUFDQyxhQUFhLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxxQkFBcUI7QUFFdkQsS0FBSyxDQUFDQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJVixTQUFTLENBQUMsQ0FBQyxFQUFFSSxhQUFhLElBQUlPLFFBQVEsQ0FBQyxDQUFRO0FBQzVFLEtBQUssQ0FBQ0MsY0FBYyxJQUFJLHNDQUFzQztBQUU5RCxLQUFLLENBQUNDLGNBQWMsYUFBZSxDQUFDO0lBQ2xDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDSCxjQUFjLEVBQUUsQ0FBQztRQUM1Q0ksTUFBTSxFQUFFLENBQU07UUFDZEMsT0FBTyxFQUFFLENBQUM7WUFDUkMsYUFBYSxHQUFHLE1BQU0sRUFBRVYsS0FBSztZQUM3QixDQUFjLGVBQUUsQ0FBbUM7UUFDckQsQ0FBQztRQUNEVyxJQUFJLEVBQUUsR0FBRyxDQUFDQyxlQUFlLENBQUMsQ0FBQztZQUN6QkMsVUFBVSxFQUFFLENBQWU7WUFDM0JmLGFBQWE7UUFDZixDQUFDLEVBQUVLLFFBQVE7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFDRyxRQUFRLENBQUNRLElBQUk7QUFDdEIsQ0FBQztBQUVELEtBQUssQ0FBQ0Msb0JBQW9CLElBQUksc0RBQXNEO0FBRTdFLEtBQUssQ0FBQ0MsYUFBYSxhQUFlLENBQUM7SUFDeEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsWUFBWSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNaLGNBQWM7SUFFN0MsTUFBTSxDQUFDRSxLQUFLLENBQUNRLG9CQUFvQixFQUFFLENBQUM7UUFDbENOLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLGFBQWEsR0FBRyxPQUFPLEVBQUVPLFlBQVk7UUFDdkMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDQyxtQkFBbUIsSUFBSSx3Q0FBd0M7QUFFOUQsS0FBSyxDQUFDQyxZQUFZLGFBQWUsQ0FBQztJQUN2QyxLQUFLLENBQUMsQ0FBQyxDQUFDRixZQUFZLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ1osY0FBYztJQUU3QyxNQUFNLENBQUNFLEtBQUssQ0FBQ1csbUJBQW1CLEVBQUUsQ0FBQztRQUNqQ1QsT0FBTyxFQUFFLENBQUM7WUFDUkMsYUFBYSxHQUFHLE9BQU8sRUFBRU8sWUFBWTtRQUN2QyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNHLHdCQUF3QixJQUFJLG9EQUFvRDtBQUUvRSxLQUFLLENBQUNDLGVBQWUsYUFBZSxDQUFDO0lBQzFDLEtBQUssQ0FBQyxDQUFDLENBQUNKLFlBQVksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDWixjQUFjO0lBRTdDLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDYSx3QkFBd0IsRUFBRSxDQUFDO1FBQ3RDWCxPQUFPLEVBQUUsQ0FBQztZQUNSQyxhQUFhLEdBQUcsT0FBTyxFQUFFTyxZQUFZO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXdvbGYubWUvLi9zcmMvbGliL3Nwb3RpZnkuanM/OWFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGNsaWVudF9pZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xuY29uc3QgY2xpZW50X3NlY3JldCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX1NFQ1JFVDtcbmNvbnN0IHJlZnJlc2hfdG9rZW4gPSBwcm9jZXNzLmVudi5TUE9USUZZX1JFRlJFU0hfVE9LRU47XG5cbmNvbnN0IGJhc2ljID0gQnVmZmVyLmZyb20oYCR7Y2xpZW50X2lkfToke2NsaWVudF9zZWNyZXR9YCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG5jb25zdCBUT0tFTl9FTkRQT0lOVCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbmA7XG5cbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFRPS0VOX0VORFBPSU5ULCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICB9LFxuICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXG4gICAgICByZWZyZXNoX3Rva2VuLFxuICAgIH0pLnRvU3RyaW5nKCksXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBOT1dfUExBWUlOR19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXIvY3VycmVudGx5LXBsYXlpbmdgO1xuXG5leHBvcnQgY29uc3QgZ2V0Tm93UGxheWluZyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgcmV0dXJuIGZldGNoKE5PV19QTEFZSU5HX0VORFBPSU5ULCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxuICAgIH0sXG4gIH0pO1xufTtcblxuY29uc3QgVE9QX1RSQUNLU19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3AvdHJhY2tzYDtcblxuZXhwb3J0IGNvbnN0IGdldFRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgcmV0dXJuIGZldGNoKFRPUF9UUkFDS1NfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL3JlY2VudGx5LXBsYXllZGA7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xuXG4gIHJldHVybiBmZXRjaChSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgfSxcbiAgfSk7XG59OyJdLCJuYW1lcyI6WyJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwicmVmcmVzaF90b2tlbiIsIlNQT1RJRllfUkVGUkVTSF9UT0tFTiIsImJhc2ljIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiVE9LRU5fRU5EUE9JTlQiLCJnZXRBY2Nlc3NUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJVUkxTZWFyY2hQYXJhbXMiLCJncmFudF90eXBlIiwianNvbiIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiZ2V0Tm93UGxheWluZyIsImFjY2Vzc190b2tlbiIsIlRPUF9UUkFDS1NfRU5EUE9JTlQiLCJnZXRUb3BUcmFja3MiLCJSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQiLCJnZXRSZWNlbnRUcmFja3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/spotify.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/now-playing.js":
/*!**************************************!*\
  !*** ./src/pages/api/now-playing.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/spotify */ \"(api)/./src/lib/spotify.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (_, res)=>{\n    const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.getRecentTracks)();\n    if (response.status === 204 || response.status > 400) {\n        return res.status(200).json({\n            isPlaying: false\n        });\n    }\n    const songs = await response.json();\n    if (songs.item === null) {\n        return res.status(200).json({\n            isPlaying: false\n        });\n    }\n    const mostRecentSong = songs.items[0];\n    const isPlaying = mostRecentSong.is_playing;\n    const title = mostRecentSong.track.name;\n    const artist = mostRecentSong.track.artists.map((_artist)=>_artist.name\n    ).shift();\n    const songUrl = mostRecentSong.track.external_urls.spotify;\n    res.setHeader(\"Cache-Control\", \"public, s-maxage=60, stale-while-revalidate=30\");\n    return res.status(200).json({\n        isPlaying,\n        title,\n        artist,\n        songUrl\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL25vdy1wbGF5aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRS9DLGlFQUFNLE9BQWdCQyxDQUFDLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0gsNkRBQWU7SUFFdEMsRUFBRSxFQUFFRyxRQUFRLENBQUNDLE1BQU0sS0FBSyxHQUFHLElBQUlELFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3JELE1BQU0sQ0FBQ0YsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxTQUFTLEVBQUUsS0FBSztRQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0osUUFBUSxDQUFDRSxJQUFJO0lBRWpDLEVBQUUsRUFBRUUsS0FBSyxDQUFDQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDTixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLFNBQVMsRUFBRSxLQUFLO1FBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0QsS0FBSyxDQUFDRyxjQUFjLEdBQUdGLEtBQUssQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDcEMsS0FBSyxDQUFDSixTQUFTLEdBQUdHLGNBQWMsQ0FBQ0UsVUFBVTtJQUMzQyxLQUFLLENBQUNDLEtBQUssR0FBR0gsY0FBYyxDQUFDSSxLQUFLLENBQUNDLElBQUk7SUFDdkMsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLGNBQWMsQ0FBQ0ksS0FBSyxDQUFDRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxHQUFLQSxPQUFPLENBQUNKLElBQUk7TUFBRUssS0FBSztJQUNoRixLQUFLLENBQUNDLE9BQU8sR0FBR1gsY0FBYyxDQUFDSSxLQUFLLENBQUNRLGFBQWEsQ0FBQ0MsT0FBTztJQUcxRHBCLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FDWCxDQUFlLGdCQUNmLENBQWdEO0lBR3BELE1BQU0sQ0FBQ3JCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsU0FBUztRQUFFTSxLQUFLO1FBQUVHLE1BQU07UUFBRUssT0FBTztJQUFDLENBQUM7QUFDbkUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXdvbGYubWUvLi9zcmMvcGFnZXMvYXBpL25vdy1wbGF5aW5nLmpzPzE5NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmVjZW50VHJhY2tzIH0gZnJvbSBcIkAvbGliL3Nwb3RpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF8sIHJlcykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmVjZW50VHJhY2tzKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBpc1BsYXlpbmc6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNvbmdzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHNvbmdzLml0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzUGxheWluZzogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgXG4gICAgY29uc3QgbW9zdFJlY2VudFNvbmcgPSBzb25ncy5pdGVtc1swXTtcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBtb3N0UmVjZW50U29uZy5pc19wbGF5aW5nO1xuICAgIGNvbnN0IHRpdGxlID0gbW9zdFJlY2VudFNvbmcudHJhY2submFtZTtcbiAgICBjb25zdCBhcnRpc3QgPSBtb3N0UmVjZW50U29uZy50cmFjay5hcnRpc3RzLm1hcCgoX2FydGlzdCkgPT4gX2FydGlzdC5uYW1lKS5zaGlmdCgpO1xuICAgIGNvbnN0IHNvbmdVcmwgPSBtb3N0UmVjZW50U29uZy50cmFjay5leHRlcm5hbF91cmxzLnNwb3RpZnk7XG5cblxuICAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICBcIkNhY2hlLUNvbnRyb2xcIixcbiAgICAgIFwicHVibGljLCBzLW1heGFnZT02MCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZT0zMFwiXG4gICAgKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBpc1BsYXlpbmcsIHRpdGxlLCBhcnRpc3QsIHNvbmdVcmwgfSk7XG59O1xuIl0sIm5hbWVzIjpbImdldFJlY2VudFRyYWNrcyIsIl8iLCJyZXMiLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJpc1BsYXlpbmciLCJzb25ncyIsIml0ZW0iLCJtb3N0UmVjZW50U29uZyIsIml0ZW1zIiwiaXNfcGxheWluZyIsInRpdGxlIiwidHJhY2siLCJuYW1lIiwiYXJ0aXN0IiwiYXJ0aXN0cyIsIm1hcCIsIl9hcnRpc3QiLCJzaGlmdCIsInNvbmdVcmwiLCJleHRlcm5hbF91cmxzIiwic3BvdGlmeSIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/now-playing.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/now-playing.js"));
module.exports = __webpack_exports__;

})();