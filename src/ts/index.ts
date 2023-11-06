import { Fluence } from "@fluencelabs/js-client";

import {
    registerFuzzyData
  } from "./main.js";

const nodes = [
    {
      "peerId": "12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN",
      "multiaddr": "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN"
    },
    {
      "peerId": "12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z",
      "multiaddr": "/ip4/127.0.0.1/tcp/9992/ws/p2p/12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z"
    },
    {
      "peerId": "12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip",
      "multiaddr": "/ip4/127.0.0.1/tcp/9993/ws/p2p/12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip"
    }
  ];

let data: any = [];

(async () => {
    await Fluence.connect(nodes[0].multiaddr, {debug: {printParticleId: true}});
    console.log('connected', (await Fluence.getClient()).getPeerId())
    registerFuzzyData({ 
        noop: async () => {
            data.push([Math.random(),Math.random(),Math.random(),Math.random()])
            console.log(data)
            return true
        },
        write: async (window: any) => {
            data.push(window)
            console.log(data)
            return true
        }
    })
})()