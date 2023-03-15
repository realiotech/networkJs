// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: realionetwork/asset/v1/token.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace realionetwork.asset.v1 {
    export class Token extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            symbol?: string;
            total?: string;
            authorizationRequired?: boolean;
            manager?: string;
            authorized?: Map<string, TokenAuthorization>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("symbol" in data && data.symbol != undefined) {
                    this.symbol = data.symbol;
                }
                if ("total" in data && data.total != undefined) {
                    this.total = data.total;
                }
                if ("authorizationRequired" in data && data.authorizationRequired != undefined) {
                    this.authorizationRequired = data.authorizationRequired;
                }
                if ("manager" in data && data.manager != undefined) {
                    this.manager = data.manager;
                }
                if ("authorized" in data && data.authorized != undefined) {
                    this.authorized = data.authorized;
                }
            }
            if (!this.authorized)
                this.authorized = new Map();
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get symbol() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set symbol(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get total() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set total(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get authorizationRequired() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set authorizationRequired(value: boolean) {
            pb_1.Message.setField(this, 4, value);
        }
        get manager() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set manager(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get authorized() {
            return pb_1.Message.getField(this, 6) as any as Map<string, TokenAuthorization>;
        }
        set authorized(value: Map<string, TokenAuthorization>) {
            pb_1.Message.setField(this, 6, value as any);
        }
        static fromObject(data: {
            name?: string;
            symbol?: string;
            total?: string;
            authorizationRequired?: boolean;
            manager?: string;
            authorized?: {
                [key: string]: ReturnType<typeof TokenAuthorization.prototype.toObject>;
            };
        }): Token {
            const message = new Token({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.symbol != null) {
                message.symbol = data.symbol;
            }
            if (data.total != null) {
                message.total = data.total;
            }
            if (data.authorizationRequired != null) {
                message.authorizationRequired = data.authorizationRequired;
            }
            if (data.manager != null) {
                message.manager = data.manager;
            }
            if (typeof data.authorized == "object") {
                message.authorized = new Map(Object.entries(data.authorized).map(([key, value]) => [key, TokenAuthorization.fromObject(value)]));
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                symbol?: string;
                total?: string;
                authorizationRequired?: boolean;
                manager?: string;
                authorized?: {
                    [key: string]: ReturnType<typeof TokenAuthorization.prototype.toObject>;
                };
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.symbol != null) {
                data.symbol = this.symbol;
            }
            if (this.total != null) {
                data.total = this.total;
            }
            if (this.authorizationRequired != null) {
                data.authorizationRequired = this.authorizationRequired;
            }
            if (this.manager != null) {
                data.manager = this.manager;
            }
            if (this.authorized.size > 0) {
                data.authorized = Object.fromEntries(Array.from(this.authorized).map(([key, value]) => [key, value.toObject()]));
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.symbol.length)
                writer.writeString(2, this.symbol);
            if (this.total.length)
                writer.writeString(3, this.total);
            if (this.authorizationRequired != false)
                writer.writeBool(4, this.authorizationRequired);
            if (this.manager.length)
                writer.writeString(5, this.manager);
            for (const [key, value] of this.authorized) {
                writer.writeMessage(6, this.authorized, () => {
                    writer.writeString(1, key);
                    writer.writeMessage(2, value, () => value.serialize(writer));
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Token {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Token();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.symbol = reader.readString();
                        break;
                    case 3:
                        message.total = reader.readString();
                        break;
                    case 4:
                        message.authorizationRequired = reader.readBool();
                        break;
                    case 5:
                        message.manager = reader.readString();
                        break;
                    case 6:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.authorized as any, reader, reader.readString, () => {
                            let value;
                            reader.readMessage(message, () => value = TokenAuthorization.deserialize(reader));
                            return value;
                        }));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Token {
            return Token.deserialize(bytes);
        }
    }
    export class TokenAuthorization extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            tokenSymbol?: string;
            address?: string;
            authorized?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tokenSymbol" in data && data.tokenSymbol != undefined) {
                    this.tokenSymbol = data.tokenSymbol;
                }
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("authorized" in data && data.authorized != undefined) {
                    this.authorized = data.authorized;
                }
            }
        }
        get tokenSymbol() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set tokenSymbol(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get authorized() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set authorized(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            tokenSymbol?: string;
            address?: string;
            authorized?: boolean;
        }): TokenAuthorization {
            const message = new TokenAuthorization({});
            if (data.tokenSymbol != null) {
                message.tokenSymbol = data.tokenSymbol;
            }
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.authorized != null) {
                message.authorized = data.authorized;
            }
            return message;
        }
        toObject() {
            const data: {
                tokenSymbol?: string;
                address?: string;
                authorized?: boolean;
            } = {};
            if (this.tokenSymbol != null) {
                data.tokenSymbol = this.tokenSymbol;
            }
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.authorized != null) {
                data.authorized = this.authorized;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.tokenSymbol.length)
                writer.writeString(1, this.tokenSymbol);
            if (this.address.length)
                writer.writeString(2, this.address);
            if (this.authorized != false)
                writer.writeBool(3, this.authorized);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TokenAuthorization {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TokenAuthorization();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.tokenSymbol = reader.readString();
                        break;
                    case 2:
                        message.address = reader.readString();
                        break;
                    case 3:
                        message.authorized = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TokenAuthorization {
            return TokenAuthorization.deserialize(bytes);
        }
    }
}
