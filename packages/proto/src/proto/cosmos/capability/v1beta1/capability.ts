// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/capability/v1beta1/capability.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace cosmos.capability.v1beta1 {
    export class Capability extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            index?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("index" in data && data.index != undefined) {
                    this.index = data.index;
                }
            }
        }
        get index() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set index(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            index?: number;
        }): Capability {
            const message = new Capability({});
            if (data.index != null) {
                message.index = data.index;
            }
            return message;
        }
        toObject() {
            const data: {
                index?: number;
            } = {};
            if (this.index != null) {
                data.index = this.index;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.index != 0)
                writer.writeUint64(1, this.index);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Capability {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Capability();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.index = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Capability {
            return Capability.deserialize(bytes);
        }
    }
    export class Owner extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            module?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("module" in data && data.module != undefined) {
                    this.module = data.module;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get module() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set module(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            module?: string;
            name?: string;
        }): Owner {
            const message = new Owner({});
            if (data.module != null) {
                message.module = data.module;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                module?: string;
                name?: string;
            } = {};
            if (this.module != null) {
                data.module = this.module;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.module.length)
                writer.writeString(1, this.module);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Owner {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Owner();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.module = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Owner {
            return Owner.deserialize(bytes);
        }
    }
    export class CapabilityOwners extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            owners?: Owner[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("owners" in data && data.owners != undefined) {
                    this.owners = data.owners;
                }
            }
        }
        get owners() {
            return pb_1.Message.getRepeatedWrapperField(this, Owner, 1) as Owner[];
        }
        set owners(value: Owner[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            owners?: ReturnType<typeof Owner.prototype.toObject>[];
        }): CapabilityOwners {
            const message = new CapabilityOwners({});
            if (data.owners != null) {
                message.owners = data.owners.map(item => Owner.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                owners?: ReturnType<typeof Owner.prototype.toObject>[];
            } = {};
            if (this.owners != null) {
                data.owners = this.owners.map((item: Owner) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.owners.length)
                writer.writeRepeatedMessage(1, this.owners, (item: Owner) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CapabilityOwners {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CapabilityOwners();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.owners, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Owner.deserialize(reader), Owner));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CapabilityOwners {
            return CapabilityOwners.deserialize(bytes);
        }
    }
}
