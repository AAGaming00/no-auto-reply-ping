const { Plugin } = require("powercord/entities");
const { inject, uninject } = require("powercord/injector");
const { React, getModule } = require("powercord/webpack");

module.exports = class NoAutoReplyPing extends Plugin {
    async startPlugin() {
        const replyMdl = await getModule(['createPendingReply'])
        inject('no-auto-reply-ping', replyMdl, 'createPendingReply', args => {
            args[0].shouldMention = false
            return args
        }, true)
    }

    pluginWillUnload() {
        uninject('no-auto-reply-ping');
    }
}