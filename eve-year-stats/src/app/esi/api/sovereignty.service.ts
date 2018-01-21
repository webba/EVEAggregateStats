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

import { GetSovereigntyCampaigns200Ok } from '../model/getSovereigntyCampaigns200Ok';
import { GetSovereigntyMap200Ok } from '../model/getSovereigntyMap200Ok';
import { GetSovereigntyStructures200Ok } from '../model/getSovereigntyStructures200Ok';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SovereigntyService {

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
     * Shows sovereignty data for campaigns.  ---  This route is cached for up to 5 seconds
     * @summary List sovereignty campaigns
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getSovereigntyCampaigns(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<GetSovereigntyCampaigns200Ok>> {
        return this.getSovereigntyCampaignsWithHttpInfo(datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Shows sovereignty information for solar systems  ---  This route is cached for up to 3600 seconds
     * @summary List sovereignty of systems
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getSovereigntyMap(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<GetSovereigntyMap200Ok>> {
        return this.getSovereigntyMapWithHttpInfo(datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Shows sovereignty data for structures.  ---  This route is cached for up to 120 seconds
     * @summary List sovereignty structures
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getSovereigntyStructures(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Array<GetSovereigntyStructures200Ok>> {
        return this.getSovereigntyStructuresWithHttpInfo(datasource, userAgent, xUserAgent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * List sovereignty campaigns
     * Shows sovereignty data for campaigns.  ---  This route is cached for up to 5 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getSovereigntyCampaignsWithHttpInfo(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/sovereignty/campaigns/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

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

    /**
     * List sovereignty of systems
     * Shows sovereignty information for solar systems  ---  This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getSovereigntyMapWithHttpInfo(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/sovereignty/map/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

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

    /**
     * List sovereignty structures
     * Shows sovereignty data for structures.  ---  This route is cached for up to 120 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getSovereigntyStructuresWithHttpInfo(datasource?: string, userAgent?: string, xUserAgent?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/sovereignty/structures/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

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
