// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ibc/core/connection/v1/connection.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./../../commitment/v1/commitment";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.connection.v1 {
    export enum State {
        STATE_UNINITIALIZED_UNSPECIFIED = 0,
        STATE_INIT = 1,
        STATE_TRYOPEN = 2,
        STATE_OPEN = 3
    }
    export class ConnectionEnd extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            versions?: Version[];
            state?: State;
            counterparty?: Counterparty;
            delay_period?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("versions" in data && data.versions != undefined) {
                    this.versions = data.versions;
                }
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
                if ("counterparty" in data && data.counterparty != undefined) {
                    this.counterparty = data.counterparty;
                }
                if ("delay_period" in data && data.delay_period != undefined) {
                    this.delay_period = data.delay_period;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get versions() {
            return pb_1.Message.getRepeatedWrapperField(this, Version, 2) as Version[];
        }
        set versions(value: Version[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 3, State.STATE_UNINITIALIZED_UNSPECIFIED) as State;
        }
        set state(value: State) {
            pb_1.Message.setField(this, 3, value);
        }
        get counterparty() {
            return pb_1.Message.getWrapperField(this, Counterparty, 4) as Counterparty;
        }
        set counterparty(value: Counterparty) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_counterparty() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get delay_period() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set delay_period(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            client_id?: string;
            versions?: ReturnType<typeof Version.prototype.toObject>[];
            state?: State;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            delay_period?: number;
        }): ConnectionEnd {
            const message = new ConnectionEnd({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.versions != null) {
                message.versions = data.versions.map(item => Version.fromObject(item));
            }
            if (data.state != null) {
                message.state = data.state;
            }
            if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
            }
            if (data.delay_period != null) {
                message.delay_period = data.delay_period;
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                versions?: ReturnType<typeof Version.prototype.toObject>[];
                state?: State;
                counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
                delay_period?: number;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.versions != null) {
                data.versions = this.versions.map((item: Version) => item.toObject());
            }
            if (this.state != null) {
                data.state = this.state;
            }
            if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
            }
            if (this.delay_period != null) {
                data.delay_period = this.delay_period;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.versions.length)
                writer.writeRepeatedMessage(2, this.versions, (item: Version) => item.serialize(writer));
            if (this.state != State.STATE_UNINITIALIZED_UNSPECIFIED)
                writer.writeEnum(3, this.state);
            if (this.has_counterparty)
                writer.writeMessage(4, this.counterparty, () => this.counterparty.serialize(writer));
            if (this.delay_period != 0)
                writer.writeUint64(5, this.delay_period);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConnectionEnd {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConnectionEnd();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.versions, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Version.deserialize(reader), Version));
                        break;
                    case 3:
                        message.state = reader.readEnum();
                        break;
                    case 4:
                        reader.readMessage(message.counterparty, () => message.counterparty = Counterparty.deserialize(reader));
                        break;
                    case 5:
                        message.delay_period = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ConnectionEnd {
            return ConnectionEnd.deserialize(bytes);
        }
    }
    export class IdentifiedConnection extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            client_id?: string;
            versions?: Version[];
            state?: State;
            counterparty?: Counterparty;
            delay_period?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("versions" in data && data.versions != undefined) {
                    this.versions = data.versions;
                }
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
                if ("counterparty" in data && data.counterparty != undefined) {
                    this.counterparty = data.counterparty;
                }
                if ("delay_period" in data && data.delay_period != undefined) {
                    this.delay_period = data.delay_period;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get versions() {
            return pb_1.Message.getRepeatedWrapperField(this, Version, 3) as Version[];
        }
        set versions(value: Version[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 4, State.STATE_UNINITIALIZED_UNSPECIFIED) as State;
        }
        set state(value: State) {
            pb_1.Message.setField(this, 4, value);
        }
        get counterparty() {
            return pb_1.Message.getWrapperField(this, Counterparty, 5) as Counterparty;
        }
        set counterparty(value: Counterparty) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_counterparty() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get delay_period() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set delay_period(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            id?: string;
            client_id?: string;
            versions?: ReturnType<typeof Version.prototype.toObject>[];
            state?: State;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            delay_period?: number;
        }): IdentifiedConnection {
            const message = new IdentifiedConnection({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.versions != null) {
                message.versions = data.versions.map(item => Version.fromObject(item));
            }
            if (data.state != null) {
                message.state = data.state;
            }
            if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
            }
            if (data.delay_period != null) {
                message.delay_period = data.delay_period;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                client_id?: string;
                versions?: ReturnType<typeof Version.prototype.toObject>[];
                state?: State;
                counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
                delay_period?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.versions != null) {
                data.versions = this.versions.map((item: Version) => item.toObject());
            }
            if (this.state != null) {
                data.state = this.state;
            }
            if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
            }
            if (this.delay_period != null) {
                data.delay_period = this.delay_period;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.client_id.length)
                writer.writeString(2, this.client_id);
            if (this.versions.length)
                writer.writeRepeatedMessage(3, this.versions, (item: Version) => item.serialize(writer));
            if (this.state != State.STATE_UNINITIALIZED_UNSPECIFIED)
                writer.writeEnum(4, this.state);
            if (this.has_counterparty)
                writer.writeMessage(5, this.counterparty, () => this.counterparty.serialize(writer));
            if (this.delay_period != 0)
                writer.writeUint64(6, this.delay_period);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedConnection {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IdentifiedConnection();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.client_id = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.versions, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Version.deserialize(reader), Version));
                        break;
                    case 4:
                        message.state = reader.readEnum();
                        break;
                    case 5:
                        reader.readMessage(message.counterparty, () => message.counterparty = Counterparty.deserialize(reader));
                        break;
                    case 6:
                        message.delay_period = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IdentifiedConnection {
            return IdentifiedConnection.deserialize(bytes);
        }
    }
    export class Counterparty extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            connection_id?: string;
            prefix?: dependency_2.ibc.core.commitment.v1.MerklePrefix;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("connection_id" in data && data.connection_id != undefined) {
                    this.connection_id = data.connection_id;
                }
                if ("prefix" in data && data.prefix != undefined) {
                    this.prefix = data.prefix;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set connection_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get prefix() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.commitment.v1.MerklePrefix, 3) as dependency_2.ibc.core.commitment.v1.MerklePrefix;
        }
        set prefix(value: dependency_2.ibc.core.commitment.v1.MerklePrefix) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_prefix() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            client_id?: string;
            connection_id?: string;
            prefix?: ReturnType<typeof dependency_2.ibc.core.commitment.v1.MerklePrefix.prototype.toObject>;
        }): Counterparty {
            const message = new Counterparty({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.connection_id != null) {
                message.connection_id = data.connection_id;
            }
            if (data.prefix != null) {
                message.prefix = dependency_2.ibc.core.commitment.v1.MerklePrefix.fromObject(data.prefix);
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                connection_id?: string;
                prefix?: ReturnType<typeof dependency_2.ibc.core.commitment.v1.MerklePrefix.prototype.toObject>;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.connection_id != null) {
                data.connection_id = this.connection_id;
            }
            if (this.prefix != null) {
                data.prefix = this.prefix.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.connection_id.length)
                writer.writeString(2, this.connection_id);
            if (this.has_prefix)
                writer.writeMessage(3, this.prefix, () => this.prefix.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Counterparty {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Counterparty();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        message.connection_id = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.prefix, () => message.prefix = dependency_2.ibc.core.commitment.v1.MerklePrefix.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Counterparty {
            return Counterparty.deserialize(bytes);
        }
    }
    export class ClientPaths extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            paths?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("paths" in data && data.paths != undefined) {
                    this.paths = data.paths;
                }
            }
        }
        get paths() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set paths(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            paths?: string[];
        }): ClientPaths {
            const message = new ClientPaths({});
            if (data.paths != null) {
                message.paths = data.paths;
            }
            return message;
        }
        toObject() {
            const data: {
                paths?: string[];
            } = {};
            if (this.paths != null) {
                data.paths = this.paths;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.paths.length)
                writer.writeRepeatedString(1, this.paths);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientPaths {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientPaths();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClientPaths {
            return ClientPaths.deserialize(bytes);
        }
    }
    export class ConnectionPaths extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            paths?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("paths" in data && data.paths != undefined) {
                    this.paths = data.paths;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get paths() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set paths(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            client_id?: string;
            paths?: string[];
        }): ConnectionPaths {
            const message = new ConnectionPaths({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.paths != null) {
                message.paths = data.paths;
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                paths?: string[];
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.paths != null) {
                data.paths = this.paths;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.paths.length)
                writer.writeRepeatedString(2, this.paths);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConnectionPaths {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConnectionPaths();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ConnectionPaths {
            return ConnectionPaths.deserialize(bytes);
        }
    }
    export class Version extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            identifier?: string;
            features?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("identifier" in data && data.identifier != undefined) {
                    this.identifier = data.identifier;
                }
                if ("features" in data && data.features != undefined) {
                    this.features = data.features;
                }
            }
        }
        get identifier() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set identifier(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get features() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set features(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            identifier?: string;
            features?: string[];
        }): Version {
            const message = new Version({});
            if (data.identifier != null) {
                message.identifier = data.identifier;
            }
            if (data.features != null) {
                message.features = data.features;
            }
            return message;
        }
        toObject() {
            const data: {
                identifier?: string;
                features?: string[];
            } = {};
            if (this.identifier != null) {
                data.identifier = this.identifier;
            }
            if (this.features != null) {
                data.features = this.features;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.identifier.length)
                writer.writeString(1, this.identifier);
            if (this.features.length)
                writer.writeRepeatedString(2, this.features);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Version {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Version();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.identifier = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Version {
            return Version.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            max_expected_time_per_block?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("max_expected_time_per_block" in data && data.max_expected_time_per_block != undefined) {
                    this.max_expected_time_per_block = data.max_expected_time_per_block;
                }
            }
        }
        get max_expected_time_per_block() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set max_expected_time_per_block(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            max_expected_time_per_block?: number;
        }): Params {
            const message = new Params({});
            if (data.max_expected_time_per_block != null) {
                message.max_expected_time_per_block = data.max_expected_time_per_block;
            }
            return message;
        }
        toObject() {
            const data: {
                max_expected_time_per_block?: number;
            } = {};
            if (this.max_expected_time_per_block != null) {
                data.max_expected_time_per_block = this.max_expected_time_per_block;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.max_expected_time_per_block != 0)
                writer.writeUint64(1, this.max_expected_time_per_block);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.max_expected_time_per_block = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
