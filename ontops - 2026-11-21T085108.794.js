// ==UserScript==
// @name         Ontops Main • Syrexa
// @namespace    https://verrni.fun/
// @version      1.2-syrexa-beta
// @description  Auto bypass Ontop by huyzeraa
// @author       huyzeraa
// @copyright    2026, Verrni Team
// @license      Proprietary
// @icon         https://cdn.verrni.fun/raw/icon.jpg
// @homepageURL  https://verrni.fun/
// @supportURL   https://verrni.fun/
// @match        https://ontops.link/*
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      html.duckduckgo.com
// @connect      lite.duckduckgo.com
// @connect      duckduckgo.com
// @connect      api-client.ontops.link
// @connect      multimedia.ontops.link
// @connect      ontops.link
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js
// @require      https://loader.verrni.fun/api/loader/syrexa_ontops.js
// ==/UserScript==

(function() {
    'use strict';

    // ============================================================
    // Ontops Main • Syrexa - Tampermonkey Userscript
    // Auto bypass Ontop by huyzeraa
    // ============================================================

    // Wait for page to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('[Syrexa] Ontops bypass script initialized');
        console.log('[Syrexa] Version: 1.2-syrexa-beta');

        // The actual bypass logic is loaded via the @require directive
        // from https://loader.verrni.fun/api/loader/syrexa_ontops.js

        // If the required script hasn't loaded yet, wait for it
        const checkInterval = setInterval(() => {
            if (typeof window.syrexaOntops !== 'undefined' || typeof window.OntopsBypass !== 'undefined') {
                console.log('[Syrexa] Bypass module detected and ready');
                clearInterval(checkInterval);
            }
        }, 500);

        // Timeout after 30 seconds
        setTimeout(() => {
            clearInterval(checkInterval);
            console.log('[Syrexa] Ready state check timed out - module may load independently');
        }, 30000);

        // Optional: Add a small status indicator to the page
        try {
            const badge = document.createElement('div');
            badge.id = 'syrexa-status-badge';
            badge.style.cssText = `
                position: fixed;
                bottom: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.75);
                color: #00ff88;
                padding: 4px 10px;
                border-radius: 4px;
                font-family: monospace;
                font-size: 11px;
                z-index: 999999;
                pointer-events: none;
                opacity: 0.8;
            `;
            badge.textContent = 'Syrexa Active';
            document.body.appendChild(badge);
        } catch (e) {
            // Silently fail if DOM isn't ready
        }
    }
})();
