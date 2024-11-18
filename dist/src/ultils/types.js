"use strict";

var STATUS_FRIENDSHIP = {
  PENDING: 'PENDING',
  RESOLVE: 'RESOLVE',
  REJECT: 'REJECT',
  OLD_FRIEND: 'OLD_FRIEND'
};
var STATUS_CHAT = {
  PRIVATE_CHAT: 'PRIVATE_CHAT',
  GROUP_CHAT: 'GROUP_CHAT'
};
var MESSAGES = {
  SEND_MESSAGE_FUNC: 'SEND_MESSAGE_FUNC',
  IMAGES: 'IMAGES',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  TEXT: 'TEXT',
  STICKER: 'STICKER',
  FILE_FOLDER: 'FILE_FOLDER',
  NOTIFY: 'NOTIFY',
  NEW_FRIEND: 'NEW_FRIEND'
};
module.exports = {
  STATUS_FRIENDSHIP: STATUS_FRIENDSHIP,
  STATUS_CHAT: STATUS_CHAT,
  MESSAGES: MESSAGES
};