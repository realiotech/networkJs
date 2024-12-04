// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: tendermint/types/validator.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./../crypto/keys";
import * as pb_1 from "google-protobuf";
export namespace tendermint.types {
    export class ValidatorSet extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            validators?: Validator[];
            proposer?: Validator;
            total_voting_power?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("validators" in data && data.validators != undefined) {
                    this.validators = data.validators;
                }
                if ("proposer" in data && data.proposer != undefined) {
                    this.proposer = data.proposer;
                }
                if ("total_voting_power" in data && data.total_voting_power != undefined) {
                    this.total_voting_power = data.total_voting_power;
                }
            }
        }
        get validators() {
            return pb_1.Message.getRepeatedWrapperField(this, Validator, 1) as Validator[];
        }
        set validators(value: Validator[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get proposer() {
            return pb_1.Message.getWrapperField(this, Validator, 2) as Validator;
        }
        set proposer(value: Validator) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_proposer() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get total_voting_power() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set total_voting_power(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            proposer?: ReturnType<typeof Validator.prototype.toObject>;
            total_voting_power?: number;
        }): ValidatorSet {
            const message = new ValidatorSet({});
            if (data.validators != null) {
                message.validators = data.validators.map(item => Validator.fromObject(item));
            }
            if (data.proposer != null) {
                message.proposer = Validator.fromObject(data.proposer);
            }
            if (data.total_voting_power != null) {
                message.total_voting_power = data.total_voting_power;
            }
            return message;
        }
        toObject() {
            const data: {
                validators?: ReturnType<typeof Validator.prototype.toObject>[];
                proposer?: ReturnType<typeof Validator.prototype.toObject>;
                total_voting_power?: number;
            } = {};
            if (this.validators != null) {
                data.validators = this.validators.map((item: Validator) => item.toObject());
            }
            if (this.proposer != null) {
                data.proposer = this.proposer.toObject();
            }
            if (this.total_voting_power != null) {
                data.total_voting_power = this.total_voting_power;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.validators.length)
                writer.writeRepeatedMessage(1, this.validators, (item: Validator) => item.serialize(writer));
            if (this.has_proposer)
                writer.writeMessage(2, this.proposer, () => this.proposer.serialize(writer));
            if (this.total_voting_power != 0)
                writer.writeInt64(3, this.total_voting_power);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorSet {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidatorSet();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.validators, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Validator.deserialize(reader), Validator));
                        break;
                    case 2:
                        reader.readMessage(message.proposer, () => message.proposer = Validator.deserialize(reader));
                        break;
                    case 3:
                        message.total_voting_power = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ValidatorSet {
            return ValidatorSet.deserialize(bytes);
        }
    }
    export class Validator extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            address?: Uint8Array;
            pub_key?: dependency_2.tendermint.crypto.PublicKey;
            voting_power?: number;
            proposer_priority?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("pub_key" in data && data.pub_key != undefined) {
                    this.pub_key = data.pub_key;
                }
                if ("voting_power" in data && data.voting_power != undefined) {
                    this.voting_power = data.voting_power;
                }
                if ("proposer_priority" in data && data.proposer_priority != undefined) {
                    this.proposer_priority = data.proposer_priority;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set address(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get pub_key() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.crypto.PublicKey, 2) as dependency_2.tendermint.crypto.PublicKey;
        }
        set pub_key(value: dependency_2.tendermint.crypto.PublicKey) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pub_key() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get voting_power() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set voting_power(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get proposer_priority() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set proposer_priority(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            address?: Uint8Array;
            pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
            voting_power?: number;
            proposer_priority?: number;
        }): Validator {
            const message = new Validator({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.pub_key != null) {
                message.pub_key = dependency_2.tendermint.crypto.PublicKey.fromObject(data.pub_key);
            }
            if (data.voting_power != null) {
                message.voting_power = data.voting_power;
            }
            if (data.proposer_priority != null) {
                message.proposer_priority = data.proposer_priority;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: Uint8Array;
                pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
                voting_power?: number;
                proposer_priority?: number;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.pub_key != null) {
                data.pub_key = this.pub_key.toObject();
            }
            if (this.voting_power != null) {
                data.voting_power = this.voting_power;
            }
            if (this.proposer_priority != null) {
                data.proposer_priority = this.proposer_priority;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeBytes(1, this.address);
            if (this.has_pub_key)
                writer.writeMessage(2, this.pub_key, () => this.pub_key.serialize(writer));
            if (this.voting_power != 0)
                writer.writeInt64(3, this.voting_power);
            if (this.proposer_priority != 0)
                writer.writeInt64(4, this.proposer_priority);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Validator {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Validator();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readBytes();
                        break;
                    case 2:
                        reader.readMessage(message.pub_key, () => message.pub_key = dependency_2.tendermint.crypto.PublicKey.deserialize(reader));
                        break;
                    case 3:
                        message.voting_power = reader.readInt64();
                        break;
                    case 4:
                        message.proposer_priority = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Validator {
            return Validator.deserialize(bytes);
        }
    }
    export class SimpleValidator extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            pub_key?: dependency_2.tendermint.crypto.PublicKey;
            voting_power?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pub_key" in data && data.pub_key != undefined) {
                    this.pub_key = data.pub_key;
                }
                if ("voting_power" in data && data.voting_power != undefined) {
                    this.voting_power = data.voting_power;
                }
            }
        }
        get pub_key() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.crypto.PublicKey, 1) as dependency_2.tendermint.crypto.PublicKey;
        }
        set pub_key(value: dependency_2.tendermint.crypto.PublicKey) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_pub_key() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get voting_power() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set voting_power(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
            voting_power?: number;
        }): SimpleValidator {
            const message = new SimpleValidator({});
            if (data.pub_key != null) {
                message.pub_key = dependency_2.tendermint.crypto.PublicKey.fromObject(data.pub_key);
            }
            if (data.voting_power != null) {
                message.voting_power = data.voting_power;
            }
            return message;
        }
        toObject() {
            const data: {
                pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
                voting_power?: number;
            } = {};
            if (this.pub_key != null) {
                data.pub_key = this.pub_key.toObject();
            }
            if (this.voting_power != null) {
                data.voting_power = this.voting_power;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_pub_key)
                writer.writeMessage(1, this.pub_key, () => this.pub_key.serialize(writer));
            if (this.voting_power != 0)
                writer.writeInt64(2, this.voting_power);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SimpleValidator {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SimpleValidator();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pub_key, () => message.pub_key = dependency_2.tendermint.crypto.PublicKey.deserialize(reader));
                        break;
                    case 2:
                        message.voting_power = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SimpleValidator {
            return SimpleValidator.deserialize(bytes);
        }
    }
}
