"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._musicaldownmusicapi = exports._musicaldownapi = exports._musicaldownurl = exports._ssstikapi = exports._ssstikurl = exports._tiktokGetPosts = exports._tiktokSearchVideoFull = exports._tiktokSearchUserFull = exports._tiktokapi = exports._tiktokurl = void 0;
exports._tiktokurl = "https://www.tiktok.com";
const _tiktokapi = (params) => `https://api.tiktokv.com/aweme/v1/feed/?${params}`;
exports._tiktokapi = _tiktokapi;
const _tiktokSearchUserFull = (params) => `${exports._tiktokurl}/api/search/user/full/?${params}`;
exports._tiktokSearchUserFull = _tiktokSearchUserFull;
const _tiktokSearchVideoFull = (params) => `${exports._tiktokurl}/api/search/item/full/?${params}`;
exports._tiktokSearchVideoFull = _tiktokSearchVideoFull;
const _tiktokGetPosts = (params) => `${exports._tiktokurl}/api/post/item_list/?${params}`;
exports._tiktokGetPosts = _tiktokGetPosts;
exports._ssstikurl = "https://ssstik.io";
exports._ssstikapi = `${exports._ssstikurl}/abc?url=dl`;
exports._musicaldownurl = "https://musicaldown.com";
exports._musicaldownapi = `${exports._musicaldownurl}/download`;
exports._musicaldownmusicapi = `${exports._musicaldownurl}/mp3/download`;
