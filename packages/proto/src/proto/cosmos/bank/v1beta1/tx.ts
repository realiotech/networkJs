// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/bank/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./bank";
import * as pb_1 from "google-protobuf";
export namespace cosmos.bank.v1beta1 {
    export class MsgSend extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("to_address" in data && data.to_address != undefined) {
                    this.to_address = data.to_address;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set to_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgSend {
            const message = new MsgSend({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.to_address != null) {
                message.to_address = data.to_address;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                to_address?: string;
                amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.to_address != null) {
                data.to_address = this.to_address;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from_address.length)
                writer.writeString(1, this.from_address);
            if (this.to_address.length)
                writer.writeString(2, this.to_address);
            if (this.amount.length)
                writer.writeRepeatedMessage(3, this.amount, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSend {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSend();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        message.to_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSend {
            return MsgSend.deserialize(bytes);
        }
    }
    export class MsgSendResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgSendResponse {
            const message = new MsgSendResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgSendResponse {
            return MsgSendResponse.deserialize(bytes);
        }
    }
    export class MsgMultiSend extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            inputs?: dependency_3.cosmos.bank.v1beta1.Input[];
            outputs?: dependency_3.cosmos.bank.v1beta1.Output[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("inputs" in data && data.inputs != undefined) {
                    this.inputs = data.inputs;
                }
                if ("outputs" in data && data.outputs != undefined) {
                    this.outputs = data.outputs;
                }
            }
        }
        get inputs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Input, 1) as dependency_3.cosmos.bank.v1beta1.Input[];
        }
        set inputs(value: dependency_3.cosmos.bank.v1beta1.Input[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get outputs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Output, 2) as dependency_3.cosmos.bank.v1beta1.Output[];
        }
        set outputs(value: dependency_3.cosmos.bank.v1beta1.Output[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            inputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Input.prototype.toObject>[];
            outputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Output.prototype.toObject>[];
        }): MsgMultiSend {
            const message = new MsgMultiSend({});
            if (data.inputs != null) {
                message.inputs = data.inputs.map(item => dependency_3.cosmos.bank.v1beta1.Input.fromObject(item));
            }
            if (data.outputs != null) {
                message.outputs = data.outputs.map(item => dependency_3.cosmos.bank.v1beta1.Output.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                inputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Input.prototype.toObject>[];
                outputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Output.prototype.toObject>[];
            } = {};
            if (this.inputs != null) {
                data.inputs = this.inputs.map((item: dependency_3.cosmos.bank.v1beta1.Input) => item.toObject());
            }
            if (this.outputs != null) {
                data.outputs = this.outputs.map((item: dependency_3.cosmos.bank.v1beta1.Output) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.inputs.length)
                writer.writeRepeatedMessage(1, this.inputs, (item: dependency_3.cosmos.bank.v1beta1.Input) => item.serialize(writer));
            if (this.outputs.length)
                writer.writeRepeatedMessage(2, this.outputs, (item: dependency_3.cosmos.bank.v1beta1.Output) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMultiSend {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgMultiSend();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.inputs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.bank.v1beta1.Input.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Input));
                        break;
                    case 2:
                        reader.readMessage(message.outputs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.bank.v1beta1.Output.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Output));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgMultiSend {
            return MsgMultiSend.deserialize(bytes);
        }
    }
    export class MsgMultiSendResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgMultiSendResponse {
            const message = new MsgMultiSendResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMultiSendResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgMultiSendResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgMultiSendResponse {
            return MsgMultiSendResponse.deserialize(bytes);
        }
    }
}
