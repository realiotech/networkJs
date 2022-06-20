// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: realionetwork/asset/v1/token.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace realionetwork.asset.v1 {
    export class Token extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            symbol?: string;
            total?: number;
            decimals?: number;
            authorizationRequired?: boolean;
            creator?: string;
            authorized?: Map<string, TokenAuthorization>;
            created?: number;
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
                if ("decimals" in data && data.decimals != undefined) {
                    this.decimals = data.decimals;
                }
                if ("authorizationRequired" in data && data.authorizationRequired != undefined) {
                    this.authorizationRequired = data.authorizationRequired;
                }
                if ("creator" in data && data.creator != undefined) {
                    this.creator = data.creator;
                }
                if ("authorized" in data && data.authorized != undefined) {
                    this.authorized = data.authorized;
                }
                if ("created" in data && data.created != undefined) {
                    this.created = data.created;
                }
            }
            if (!this.authorized)
                this.authorized = new Map();
        }
        get name() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get symbol() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set symbol(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get total() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set total(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get decimals() {
            return pb_1.Message.getField(this, 4) as number;
        }
        set decimals(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get authorizationRequired() {
            return pb_1.Message.getField(this, 5) as boolean;
        }
        set authorizationRequired(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        get creator() {
            return pb_1.Message.getField(this, 6) as string;
        }
        set creator(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get authorized() {
            return pb_1.Message.getField(this, 7) as any as Map<string, TokenAuthorization>;
        }
        set authorized(value: Map<string, TokenAuthorization>) {
            pb_1.Message.setField(this, 7, value as any);
        }
        get created() {
            return pb_1.Message.getField(this, 8) as number;
        }
        set created(value: number) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            name?: string;
            symbol?: string;
            total?: number;
            decimals?: number;
            authorizationRequired?: boolean;
            creator?: string;
            authorized?: {
                [key: string]: ReturnType<typeof TokenAuthorization.prototype.toObject>;
            };
            created?: number;
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
            if (data.decimals != null) {
                message.decimals = data.decimals;
            }
            if (data.authorizationRequired != null) {
                message.authorizationRequired = data.authorizationRequired;
            }
            if (data.creator != null) {
                message.creator = data.creator;
            }
            if (typeof data.authorized == "object") {
                message.authorized = new Map(Object.entries(data.authorized).map(([key, value]) => [key, TokenAuthorization.fromObject(value)]));
            }
            if (data.created != null) {
                message.created = data.created;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                symbol?: string;
                total?: number;
                decimals?: number;
                authorizationRequired?: boolean;
                creator?: string;
                authorized?: {
                    [key: string]: ReturnType<typeof TokenAuthorization.prototype.toObject>;
                };
                created?: number;
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
            if (this.decimals != null) {
                data.decimals = this.decimals;
            }
            if (this.authorizationRequired != null) {
                data.authorizationRequired = this.authorizationRequired;
            }
            if (this.creator != null) {
                data.creator = this.creator;
            }
            if (this.authorized.size > 0) {
                data.authorized = Object.fromEntries(Array.from(this.authorized).map(([key, value]) => [key, value.toObject()]));
            }
            if (this.created != null) {
                data.created = this.created;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (typeof this.symbol === "string" && this.symbol.length)
                writer.writeString(2, this.symbol);
            if (this.total !== undefined)
                writer.writeInt64(3, this.total);
            if (this.decimals !== undefined)
                writer.writeInt64(4, this.decimals);
            if (this.authorizationRequired !== undefined)
                writer.writeBool(5, this.authorizationRequired);
            if (typeof this.creator === "string" && this.creator.length)
                writer.writeString(6, this.creator);
            for (const [key, value] of this.authorized) {
                writer.writeMessage(7, this.authorized, () => {
                    writer.writeString(1, key);
                    writer.writeMessage(2, value, () => value.serialize(writer));
                });
            }
            if (this.created !== undefined)
                writer.writeInt64(8, this.created);
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
                        message.total = reader.readInt64();
                        break;
                    case 4:
                        message.decimals = reader.readInt64();
                        break;
                    case 5:
                        message.authorizationRequired = reader.readBool();
                        break;
                    case 6:
                        message.creator = reader.readString();
                        break;
                    case 7:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.authorized as any, reader, reader.readString, () => {
                            let value;
                            reader.readMessage(message, () => value = TokenAuthorization.deserialize(reader));
                            return value;
                        }));
                        break;
                    case 8:
                        message.created = reader.readInt64();
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
            return pb_1.Message.getField(this, 1) as string;
        }
        set tokenSymbol(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get authorized() {
            return pb_1.Message.getField(this, 3) as boolean;
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
            if (typeof this.tokenSymbol === "string" && this.tokenSymbol.length)
                writer.writeString(1, this.tokenSymbol);
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(2, this.address);
            if (this.authorized !== undefined)
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
