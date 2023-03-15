// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: ibc/applications/interchain_accounts/controller/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./controller";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.controller.v1 {
    export class QueryInterchainAccountRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            owner?: string;
            connection_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
                if ("connection_id" in data && data.connection_id != undefined) {
                    this.connection_id = data.connection_id;
                }
            }
        }
        get owner() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set connection_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            owner?: string;
            connection_id?: string;
        }): QueryInterchainAccountRequest {
            const message = new QueryInterchainAccountRequest({});
            if (data.owner != null) {
                message.owner = data.owner;
            }
            if (data.connection_id != null) {
                message.connection_id = data.connection_id;
            }
            return message;
        }
        toObject() {
            const data: {
                owner?: string;
                connection_id?: string;
            } = {};
            if (this.owner != null) {
                data.owner = this.owner;
            }
            if (this.connection_id != null) {
                data.connection_id = this.connection_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.owner.length)
                writer.writeString(1, this.owner);
            if (this.connection_id.length)
                writer.writeString(2, this.connection_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInterchainAccountRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInterchainAccountRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.owner = reader.readString();
                        break;
                    case 2:
                        message.connection_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInterchainAccountRequest {
            return QueryInterchainAccountRequest.deserialize(bytes);
        }
    }
    export class QueryInterchainAccountResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            address?: string;
        }): QueryInterchainAccountResponse {
            const message = new QueryInterchainAccountResponse({});
            if (data.address != null) {
                message.address = data.address;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInterchainAccountResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInterchainAccountResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInterchainAccountResponse {
            return QueryInterchainAccountResponse.deserialize(bytes);
        }
    }
    export class QueryParamsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryParamsRequest {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: dependency_1.ibc.applications.interchain_accounts.controller.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_1.ibc.applications.interchain_accounts.controller.v1.Params, 1) as dependency_1.ibc.applications.interchain_accounts.controller.v1.Params;
        }
        set params(value: dependency_1.ibc.applications.interchain_accounts.controller.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_1.ibc.applications.interchain_accounts.controller.v1.Params.prototype.toObject>;
        }): QueryParamsResponse {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_1.ibc.applications.interchain_accounts.controller.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_1.ibc.applications.interchain_accounts.controller.v1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_1.ibc.applications.interchain_accounts.controller.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
}
