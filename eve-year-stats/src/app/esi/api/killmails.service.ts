/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Forbidden } from '../model/forbidden';
import { GetCharactersCharacterIdKillmailsRecent200Ok } from '../model/getCharactersCharacterIdKillmailsRecent200Ok';
import { GetCorporationsCorporationIdKillmailsRecent200Ok } from '../model/getCorporationsCorporationIdKillmailsRecent200Ok';
import { GetKillmailsKillmailIdKillmailHashOk } from '../model/getKillmailsKillmailIdKillmailHashOk';
import { GetKillmailsKillmailIdKillmailHashUnprocessableEntity } from '../model/getKillmailsKillmailIdKillmailHashUnprocessableEntity';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class KillmailsService {

    protected basePath = 'https://esi.tech.ccp.is';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * Return a list of character's recent kills and losses  ---  This route is cached for up to 120 seconds
     * @summary Get character kills and losses
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param maxCount How many killmails to return at maximum
     * @param maxKillId Only return killmails with ID smaller than this. 
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdKillmailsRecent(characterId: number, datasource?: string, maxCount?: number, maxKillId?: number, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<GetCharactersCharacterIdKillmailsRecent200Ok>> {
        return this.getCharactersCharacterIdKillmailsRecentWithHttpInfo(characterId, datasource, maxCount, maxKillId, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get a list of corporation's recent kills and losses  ---  This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Director
     * @summary Get corporation kills and losses
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param maxKillId Only return killmails with ID smaller than this
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdKillmailsRecent(corporationId: number, datasource?: string, maxKillId?: number, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<GetCorporationsCorporationIdKillmailsRecent200Ok>> {
        return this.getCorporationsCorporationIdKillmailsRecentWithHttpInfo(corporationId, datasource, maxKillId, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Return a single killmail from its ID and hash  ---  This route is cached for up to 1209600 seconds
     * @summary Get a single killmail
     * @param killmailHash The killmail hash for verification
     * @param killmailId The killmail ID to be queried
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getKillmailsKillmailIdKillmailHash(killmailHash: string, killmailId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<GetKillmailsKillmailIdKillmailHashOk> {
        return this.getKillmailsKillmailIdKillmailHashWithHttpInfo(killmailHash, killmailId, datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get character kills and losses
     * Return a list of character&#39;s recent kills and losses  ---  This route is cached for up to 120 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param maxCount How many killmails to return at maximum
     * @param maxKillId Only return killmails with ID smaller than this. 
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdKillmailsRecentWithHttpInfo(characterId: number, datasource?: string, maxCount?: number, maxKillId?: number, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/characters/${character_id}/killmails/recent/'
                    .replace('${' + 'character_id' + '}', String(characterId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'characterId' is not null or undefined
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdKillmailsRecent.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (maxCount !== undefined) {
            queryParameters.set('max_count', <any>maxCount);
        }

        if (maxKillId !== undefined) {
            queryParameters.set('max_kill_id', <any>maxKillId);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers.set('X-User-Agent', String(xUserAgent));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get corporation kills and losses
     * Get a list of corporation&#39;s recent kills and losses  ---  This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Director
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param maxKillId Only return killmails with ID smaller than this
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCorporationsCorporationIdKillmailsRecentWithHttpInfo(corporationId: number, datasource?: string, maxKillId?: number, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/corporations/${corporation_id}/killmails/recent/'
                    .replace('${' + 'corporation_id' + '}', String(corporationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'corporationId' is not null or undefined
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdKillmailsRecent.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (maxKillId !== undefined) {
            queryParameters.set('max_kill_id', <any>maxKillId);
        }

        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers.set('X-User-Agent', String(xUserAgent));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (evesso) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get a single killmail
     * Return a single killmail from its ID and hash  ---  This route is cached for up to 1209600 seconds
     * @param killmailHash The killmail hash for verification
     * @param killmailId The killmail ID to be queried
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getKillmailsKillmailIdKillmailHashWithHttpInfo(killmailHash: string, killmailId: number, datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/killmails/${killmail_id}/${killmail_hash}/'
                    .replace('${' + 'killmail_hash' + '}', String(killmailHash))
                    .replace('${' + 'killmail_id' + '}', String(killmailId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'killmailHash' is not null or undefined
        if (killmailHash === null || killmailHash === undefined) {
            throw new Error('Required parameter killmailHash was null or undefined when calling getKillmailsKillmailIdKillmailHash.');
        }
        // verify required parameter 'killmailId' is not null or undefined
        if (killmailId === null || killmailId === undefined) {
            throw new Error('Required parameter killmailId was null or undefined when calling getKillmailsKillmailIdKillmailHash.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
        }

        if (userAgent !== undefined) {
            queryParameters.set('user_agent', <any>userAgent);
        }

        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers.set('X-User-Agent', String(xUserAgent));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
