// ==UserScript==
// @name         Mastodon #InstanceTicker (GitHub Version)
// @namespace    https://github.com/weepjp/MastodonInstanceTicker
// @version      GitHub_Ver_0.2.0
// @description  #InstanceTicker とは、Mastodon タイムライン上の投稿者のみなさんに所属インスタンス名を彩るカスタムCSSです。
// @author       weep https://weep.me/@weep
//
// @license      Original CSS © https://odakyu.app/@ars42525 and #InstanceTicker © 2018 https://weep.me/@weep Released under the MIT license https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVQ4y6WTLWzCUBSFnwAxxMQEE5uYQMxMDIGYmamEjvCX2lVM0ASxpCOBZE1mSINA1CCqq6ura6urq6urz3oeKEiBPF7y2S/v3HuuCMMQURRJ4jhGkiSSNE2RZZkkz3NJURQ4fCIIAtQnWzQmHm7HG9yN1mgOV3gY/uFp4KDVX+K5P8fLxzfa+gyd3hRv3S+8dz93At/3USsFN+MDwYCC31KwKAU/UvBaJagrChhJeJ53ncB13TOCZaWAgxWO4xwJ7s8JejsBN3SVgKsWtm0rR5ACy7KUh8jCCdM0lSOwuRcIqn/A+gvDMC6YwbxaoOu6cpV5iELTtOMIoxUeTx3TfgY8RCkg/AlhJM6FcENcM2Ff2FrC+vOGyD8Yvit5VS8OawAAAABJRU5ErkJggg==
//
// @match        https://mastodon.social/*
// @match        https://mastodon.cloud/*
// @match        https://mastodon.club/*
// @match        https://mastodon.host/*
// @match        https://mastodon.moe/*
// @match        https://mastodon.xyz/*
// @match        https://mastodon.art/*
// @match        https://masto.pt/*
// @match        https://ika.moe/*
// @match        https://mstdn.jp/*
// @match        https://mstdn.guru/*
// @match        https://pawoo.net/*
// @match        https://music.pawoo.net/*
// @match        https://friends.nico/*
// @match        https://mstdn.maud.io/*
// @match        https://theboss.tech/*
// @match        https://knzk.me/*
// @match        https://*.masto.host/*
// @match        https://*.m.to/*
// @match        https://*.hostdon.jp/*
// @match        https://*.mstdn.cloud/*
// @match        https://*.mastportal.info/*
// @match        https://now.kibousoft.co.jp/*
// @match        https://mastodon.juggler.jp/*
// @match        https://mstdn.beer/*
// @match        https://alserver.jp/*
// @match        https://abyss.fun/*
// @match        https://kinishinai.net/*
// @match        https://mstdn.kemono-friends.info/*
// @match        https://mstdn.hokkaido.jp/*
// @match        https://iwatedon.net/*
// @match        https://itabashi.0j0.jp/*
// @match        https://mstdn.ikebuku.ro/*
// @match        https://mstdn.tokyo/*
// @match        https://*.mstdn.tokyo/*
// @match        https://mastodon.yokohama/*
// @match        https://nagoyadon.jp/*
// @match        https://mstdn.osaka/*
// @match        https://minohdon.jp/*
// @match        https://ngndn.jp/*
// @match        https://mstdn-kanazawa.jp/*
// @match        https://mastodos.com/*
// @match        https://mastodon.wakayama.jp/*
// @match        https://mastodon.nara.jp/*
// @match        https://mstdn.hyogo.jp/*
// @match        https://mstdn.sanin.club/*
// @match        https://mstdn.fukuoka.jp/*
// @match        https://mastodon.oita.jp/*
// @match        https://mstdn.miyazaki.jp/*
// @match        https://tegedon.net/*
// @match        https://vocalodon.net/*
// @match        https://mikuspot.net/*
// @match        https://mikumikudance.cloud/*
// @match        https://mimumedon.com/*
// @match        https://kirakiratter.com/*
// @match        https://ro-mastodon.puyo.jp/*
// @match        https://qiitadon.com/*
// @match        https://hearthtodon.com/*
// @match        https://mathtod.online/*
// @match        https://imastodon.net/*
// @match        https://mstdn.tokyocameraclub.com/*
// @match        https://ffxiv-mastodon.com/*
// @match        https://ichiji.social/*
// @match        https://matchdon.com/*
// @match        https://otoya.space/*
//
// @resource     CCSS https://raw.githubusercontent.com/weepjp/MastodonInstanceTicker/master/InstanceTicker.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
//
//
/****************************************************
 * MastdonInstanceTicker.user.js                    *
 * https://github.com/weepjp/MastodonInstanceTicker *
 ****************************************************/
//
// ==/UserScript==

GM_addStyle(GM_getResourceText('CCSS'));

