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
import { GetCharactersCharacterIdLocationOk } from '../model/getCharactersCharacterIdLocationOk';
import { GetCharactersCharacterIdOnlineOk } from '../model/getCharactersCharacterIdOnlineOk';
import { GetCharactersCharacterIdShipOk } from '../model/getCharactersCharacterIdShipOk';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LocationService {

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
     * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.  ---  This route is cached for up to 5 seconds
     * @summary Get character location
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdLocation(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<GetCharactersCharacterIdLocationOk> {
        return this.getCharactersCharacterIdLocationWithHttpInfo(characterId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Checks if the character is currently online  ---  This route is cached for up to 60 seconds
     * @summary Get character online
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdOnline(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<GetCharactersCharacterIdOnlineOk> {
        return this.getCharactersCharacterIdOnlineWithHttpInfo(characterId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get the current ship type, name and id  ---  This route is cached for up to 5 seconds
     * @summary Get current ship
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdShip(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<GetCharactersCharacterIdShipOk> {
        return this.getCharactersCharacterIdShipWithHttpInfo(characterId, datasource, token, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get character location
     * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.  ---  This route is cached for up to 5 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdLocationWithHttpInfo(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/characters/${character_id}/location/'
                    .replace('${' + 'character_id' + '}', String(characterId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'characterId' is not null or undefined
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdLocation.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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
     * Get character online
     * Checks if the character is currently online  ---  This route is cached for up to 60 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdOnlineWithHttpInfo(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v2/characters/${character_id}/online/'
                    .replace('${' + 'character_id' + '}', String(characterId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'characterId' is not null or undefined
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdOnline.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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
     * Get current ship
     * Get the current ship type, name and id  ---  This route is cached for up to 5 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdShipWithHttpInfo(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/characters/${character_id}/ship/'
                    .replace('${' + 'character_id' + '}', String(characterId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'characterId' is not null or undefined
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdShip.');
        }
        if (datasource !== undefined) {
            queryParameters.set('datasource', <any>datasource);
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

}
