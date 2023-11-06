/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.12.2
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';
    


// Services

export interface FuzzyDataDef {
    noop: (callParams: CallParams$$<null>) => boolean | Promise<boolean>;
    write: (window: number[], callParams: CallParams$$<'window'>) => boolean | Promise<boolean>;
}
export function registerFuzzyData(service: FuzzyDataDef): void;
export function registerFuzzyData(serviceId: string, service: FuzzyDataDef): void;
export function registerFuzzyData(peer: IFluenceClient$$, service: FuzzyDataDef): void;
export function registerFuzzyData(peer: IFluenceClient$$, serviceId: string, service: FuzzyDataDef): void;
       

export function registerFuzzyData(...args: any) {
    registerService$$(
        args,
        {
    "defaultServiceId" : "fuzzyData",
    "functions" : {
        "tag" : "labeledProduct",
        "fields" : {
            "noop" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "nil"
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "scalar",
                            "name" : "bool"
                        }
                    ]
                }
            },
            "write" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "window" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "i32"
                            }
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "scalar",
                            "name" : "bool"
                        }
                    ]
                }
            }
        }
    }
}
    );
}
      
// Functions
export const getLogs_script = `
                    (seq
                     (seq
                      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                      (xor
                       (new $results
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (new $option-inline
                               (seq
                                (seq
                                 (seq
                                  (new $array-inline
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (call %init_peer_id% ("json" "obj") ["hostId" "12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN" "spellId" "f7bc7a60-8d30-4fe7-9023-b6c4413e11d1" "workerId" "12D3KooWHh412LJB2MCNzzk4wUqeM1LGW2X4uZTaW7Yhc4EQDq71"] SpellLocation_obj)
                                         (call %init_peer_id% ("json" "obj") ["hostId" "12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z" "spellId" "51dbaf70-92fe-4774-8eeb-a3dfdcdcf591" "workerId" "12D3KooWA4PEzBtrrYHvhTjCcQv67uDpngayYTwWaSANG2Nui417"] SpellLocation_obj-0)
                                        )
                                        (call %init_peer_id% ("json" "obj") ["hostId" "12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip" "spellId" "779a3670-b8b8-4f7a-a4e7-e813fd40b282" "workerId" "12D3KooWNdGNWVuadqTQkRH6iKQGDLZUP48H4PG51gGnWndYAowE"] SpellLocation_obj-1)
                                       )
                                       (ap SpellLocation_obj $array-inline)
                                      )
                                      (ap SpellLocation_obj-0 $array-inline)
                                     )
                                     (ap SpellLocation_obj-1 $array-inline)
                                    )
                                    (canon %init_peer_id% $array-inline  #array-inline-0)
                                   )
                                  )
                                  (call %init_peer_id% ("json" "obj") ["definition" "bafkreiaorhyuqvb3isrhu4ygazw3heygf3syniwzywxo4nrkngizljnbt4" "dummyDealId" "defaultWorker_12D3KooWNe8E9vzJvYPn6k8TUAiGxCQDX57oEgPJs9fVnQq6NCv2_47699871019106665" "installationSpells" #array-inline-0 "relayId" "12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN" "timestamp" "2023-11-06T11:04:36.738Z"] Host_obj)
                                 )
                                 (xor
                                  (ap Host_obj $option-inline)
                                  (null)
                                 )
                                )
                                (canon %init_peer_id% $option-inline  #option-inline-0)
                               )
                              )
                              (call %init_peer_id% ("json" "obj") ["defaultWorker" #option-inline-0] Hosts_obj)
                             )
                             (ap Hosts_obj.$.defaultWorker Hosts_obj_flat)
                            )
                            (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
                           )
                           (fold Hosts_obj_flat_flat w-0
                            (seq
                             (xor
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (new $-ephemeral-stream-
                                    (new #-ephemeral-canon-
                                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                   (new $-ephemeral-stream-
                                    (new #-ephemeral-canon-
                                     (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                    )
                                   )
                                  )
                                  (call w-0.$.workerId ("worker-spell" "list_get_strings") ["logs"] ret)
                                 )
                                 (ap ret $results)
                                )
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                               )
                               (new $-ephemeral-stream-
                                (new #-ephemeral-canon-
                                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                )
                               )
                              )
                              (seq
                               (seq
                                (seq
                                 (new $-ephemeral-stream-
                                  (new #-ephemeral-canon-
                                   (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                  )
                                 )
                                 (new $-ephemeral-stream-
                                  (new #-ephemeral-canon-
                                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                  )
                                 )
                                )
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                               )
                               (fail %last_error%)
                              )
                             )
                             (next w-0)
                            )
                           )
                          )
                          (canon %init_peer_id% $results  #-results-fix-0)
                         )
                         (ap #-results-fix-0 -results-flat-0)
                        )
                       )
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 0])
                      )
                     )
                     (call %init_peer_id% ("callbackSrv" "response") [-results-flat-0])
                    )
    `
 

export function getLogs(
    config?: {ttl?: number}
): Promise<{ error: string; strings: string[]; success: boolean; }[]>;

export function getLogs(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<{ error: string; strings: string[]; success: boolean; }[]>;

export function getLogs(...args: any) {


    return callFunction$$(
        args,
        {
    "functionName" : "getLogs",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "array",
                    "type" : {
                        "tag" : "struct",
                        "name" : "StringListValue",
                        "fields" : {
                            "error" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "strings" : {
                                "tag" : "array",
                                "type" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            },
                            "success" : {
                                "tag" : "scalar",
                                "name" : "bool"
                            }
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        getLogs_script
    )
}

export const helloWorld_script = `
                    (seq
                     (seq
                      (seq
                       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                       (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
                      )
                      (xor
                       (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 0])
                      )
                     )
                     (call %init_peer_id% ("callbackSrv" "response") [ret])
                    )
    `
 

export function helloWorld(
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(
    peer: IFluenceClient$$,
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(...args: any) {


    return callFunction$$(
        args,
        {
    "functionName" : "helloWorld",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "name" : {
                    "tag" : "scalar",
                    "name" : "string"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "scalar",
                    "name" : "string"
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        helloWorld_script
    )
}

/* eslint-enable */