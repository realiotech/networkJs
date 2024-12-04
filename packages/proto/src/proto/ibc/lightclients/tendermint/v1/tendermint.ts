// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ibc/lightclients/tendermint/v1/tendermint.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../tendermint/types/validator";
import * as dependency_2 from "./../../../../tendermint/types/types";
import * as dependency_3 from "./../../../../proofs";
import * as dependency_4 from "./../../../../google/protobuf/duration";
import * as dependency_5 from "./../../../../google/protobuf/timestamp";
import * as dependency_6 from "./../../../core/client/v1/client";
import * as dependency_7 from "./../../../core/commitment/v1/commitment";
import * as pb_1 from "google-protobuf";
export namespace ibc.lightclients.tendermint.v1 {
    export class ClientState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            chain_id?: string;
            trust_level?: Fraction;
            trusting_period?: dependency_4.google.protobuf.Duration;
            unbonding_period?: dependency_4.google.protobuf.Duration;
            max_clock_drift?: dependency_4.google.protobuf.Duration;
            frozen_height?: dependency_6.ibc.core.client.v1.Height;
            latest_height?: dependency_6.ibc.core.client.v1.Height;
            proof_specs?: dependency_3.ics23.ProofSpec[];
            upgrade_path?: string[];
            /** @deprecated*/
            allow_update_after_expiry?: boolean;
            /** @deprecated*/
            allow_update_after_misbehaviour?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8, 9], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chain_id" in data && data.chain_id != undefined) {
                    this.chain_id = data.chain_id;
                }
                if ("trust_level" in data && data.trust_level != undefined) {
                    this.trust_level = data.trust_level;
                }
                if ("trusting_period" in data && data.trusting_period != undefined) {
                    this.trusting_period = data.trusting_period;
                }
                if ("unbonding_period" in data && data.unbonding_period != undefined) {
                    this.unbonding_period = data.unbonding_period;
                }
                if ("max_clock_drift" in data && data.max_clock_drift != undefined) {
                    this.max_clock_drift = data.max_clock_drift;
                }
                if ("frozen_height" in data && data.frozen_height != undefined) {
                    this.frozen_height = data.frozen_height;
                }
                if ("latest_height" in data && data.latest_height != undefined) {
                    this.latest_height = data.latest_height;
                }
                if ("proof_specs" in data && data.proof_specs != undefined) {
                    this.proof_specs = data.proof_specs;
                }
                if ("upgrade_path" in data && data.upgrade_path != undefined) {
                    this.upgrade_path = data.upgrade_path;
                }
                if ("allow_update_after_expiry" in data && data.allow_update_after_expiry != undefined) {
                    this.allow_update_after_expiry = data.allow_update_after_expiry;
                }
                if ("allow_update_after_misbehaviour" in data && data.allow_update_after_misbehaviour != undefined) {
                    this.allow_update_after_misbehaviour = data.allow_update_after_misbehaviour;
                }
            }
        }
        get chain_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set chain_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get trust_level() {
            return pb_1.Message.getWrapperField(this, Fraction, 2) as Fraction;
        }
        set trust_level(value: Fraction) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_trust_level() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get trusting_period() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Duration, 3) as dependency_4.google.protobuf.Duration;
        }
        set trusting_period(value: dependency_4.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_trusting_period() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get unbonding_period() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Duration, 4) as dependency_4.google.protobuf.Duration;
        }
        set unbonding_period(value: dependency_4.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_unbonding_period() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get max_clock_drift() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Duration, 5) as dependency_4.google.protobuf.Duration;
        }
        set max_clock_drift(value: dependency_4.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_max_clock_drift() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get frozen_height() {
            return pb_1.Message.getWrapperField(this, dependency_6.ibc.core.client.v1.Height, 6) as dependency_6.ibc.core.client.v1.Height;
        }
        set frozen_height(value: dependency_6.ibc.core.client.v1.Height) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_frozen_height() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get latest_height() {
            return pb_1.Message.getWrapperField(this, dependency_6.ibc.core.client.v1.Height, 7) as dependency_6.ibc.core.client.v1.Height;
        }
        set latest_height(value: dependency_6.ibc.core.client.v1.Height) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get has_latest_height() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get proof_specs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ics23.ProofSpec, 8) as dependency_3.ics23.ProofSpec[];
        }
        set proof_specs(value: dependency_3.ics23.ProofSpec[]) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
        }
        get upgrade_path() {
            return pb_1.Message.getFieldWithDefault(this, 9, []) as string[];
        }
        set upgrade_path(value: string[]) {
            pb_1.Message.setField(this, 9, value);
        }
        /** @deprecated*/
        get allow_update_after_expiry() {
            return pb_1.Message.getFieldWithDefault(this, 10, false) as boolean;
        }
        /** @deprecated*/
        set allow_update_after_expiry(value: boolean) {
            pb_1.Message.setField(this, 10, value);
        }
        /** @deprecated*/
        get allow_update_after_misbehaviour() {
            return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
        }
        /** @deprecated*/
        set allow_update_after_misbehaviour(value: boolean) {
            pb_1.Message.setField(this, 11, value);
        }
        static fromObject(data: {
            chain_id?: string;
            trust_level?: ReturnType<typeof Fraction.prototype.toObject>;
            trusting_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            unbonding_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            max_clock_drift?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            frozen_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            latest_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            proof_specs?: ReturnType<typeof dependency_3.ics23.ProofSpec.prototype.toObject>[];
            upgrade_path?: string[];
            allow_update_after_expiry?: boolean;
            allow_update_after_misbehaviour?: boolean;
        }): ClientState {
            const message = new ClientState({});
            if (data.chain_id != null) {
                message.chain_id = data.chain_id;
            }
            if (data.trust_level != null) {
                message.trust_level = Fraction.fromObject(data.trust_level);
            }
            if (data.trusting_period != null) {
                message.trusting_period = dependency_4.google.protobuf.Duration.fromObject(data.trusting_period);
            }
            if (data.unbonding_period != null) {
                message.unbonding_period = dependency_4.google.protobuf.Duration.fromObject(data.unbonding_period);
            }
            if (data.max_clock_drift != null) {
                message.max_clock_drift = dependency_4.google.protobuf.Duration.fromObject(data.max_clock_drift);
            }
            if (data.frozen_height != null) {
                message.frozen_height = dependency_6.ibc.core.client.v1.Height.fromObject(data.frozen_height);
            }
            if (data.latest_height != null) {
                message.latest_height = dependency_6.ibc.core.client.v1.Height.fromObject(data.latest_height);
            }
            if (data.proof_specs != null) {
                message.proof_specs = data.proof_specs.map(item => dependency_3.ics23.ProofSpec.fromObject(item));
            }
            if (data.upgrade_path != null) {
                message.upgrade_path = data.upgrade_path;
            }
            if (data.allow_update_after_expiry != null) {
                message.allow_update_after_expiry = data.allow_update_after_expiry;
            }
            if (data.allow_update_after_misbehaviour != null) {
                message.allow_update_after_misbehaviour = data.allow_update_after_misbehaviour;
            }
            return message;
        }
        toObject() {
            const data: {
                chain_id?: string;
                trust_level?: ReturnType<typeof Fraction.prototype.toObject>;
                trusting_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
                unbonding_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
                max_clock_drift?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
                frozen_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
                latest_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
                proof_specs?: ReturnType<typeof dependency_3.ics23.ProofSpec.prototype.toObject>[];
                upgrade_path?: string[];
                allow_update_after_expiry?: boolean;
                allow_update_after_misbehaviour?: boolean;
            } = {};
            if (this.chain_id != null) {
                data.chain_id = this.chain_id;
            }
            if (this.trust_level != null) {
                data.trust_level = this.trust_level.toObject();
            }
            if (this.trusting_period != null) {
                data.trusting_period = this.trusting_period.toObject();
            }
            if (this.unbonding_period != null) {
                data.unbonding_period = this.unbonding_period.toObject();
            }
            if (this.max_clock_drift != null) {
                data.max_clock_drift = this.max_clock_drift.toObject();
            }
            if (this.frozen_height != null) {
                data.frozen_height = this.frozen_height.toObject();
            }
            if (this.latest_height != null) {
                data.latest_height = this.latest_height.toObject();
            }
            if (this.proof_specs != null) {
                data.proof_specs = this.proof_specs.map((item: dependency_3.ics23.ProofSpec) => item.toObject());
            }
            if (this.upgrade_path != null) {
                data.upgrade_path = this.upgrade_path;
            }
            if (this.allow_update_after_expiry != null) {
                data.allow_update_after_expiry = this.allow_update_after_expiry;
            }
            if (this.allow_update_after_misbehaviour != null) {
                data.allow_update_after_misbehaviour = this.allow_update_after_misbehaviour;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.chain_id.length)
                writer.writeString(1, this.chain_id);
            if (this.has_trust_level)
                writer.writeMessage(2, this.trust_level, () => this.trust_level.serialize(writer));
            if (this.has_trusting_period)
                writer.writeMessage(3, this.trusting_period, () => this.trusting_period.serialize(writer));
            if (this.has_unbonding_period)
                writer.writeMessage(4, this.unbonding_period, () => this.unbonding_period.serialize(writer));
            if (this.has_max_clock_drift)
                writer.writeMessage(5, this.max_clock_drift, () => this.max_clock_drift.serialize(writer));
            if (this.has_frozen_height)
                writer.writeMessage(6, this.frozen_height, () => this.frozen_height.serialize(writer));
            if (this.has_latest_height)
                writer.writeMessage(7, this.latest_height, () => this.latest_height.serialize(writer));
            if (this.proof_specs.length)
                writer.writeRepeatedMessage(8, this.proof_specs, (item: dependency_3.ics23.ProofSpec) => item.serialize(writer));
            if (this.upgrade_path.length)
                writer.writeRepeatedString(9, this.upgrade_path);
            if (this.allow_update_after_expiry != false)
                writer.writeBool(10, this.allow_update_after_expiry);
            if (this.allow_update_after_misbehaviour != false)
                writer.writeBool(11, this.allow_update_after_misbehaviour);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.chain_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.trust_level, () => message.trust_level = Fraction.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.trusting_period, () => message.trusting_period = dependency_4.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.unbonding_period, () => message.unbonding_period = dependency_4.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.max_clock_drift, () => message.max_clock_drift = dependency_4.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.frozen_height, () => message.frozen_height = dependency_6.ibc.core.client.v1.Height.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.latest_height, () => message.latest_height = dependency_6.ibc.core.client.v1.Height.deserialize(reader));
                        break;
                    case 8:
                        reader.readMessage(message.proof_specs, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_3.ics23.ProofSpec.deserialize(reader), dependency_3.ics23.ProofSpec));
                        break;
                    case 9:
                        pb_1.Message.addToRepeatedField(message, 9, reader.readString());
                        break;
                    case 10:
                        message.allow_update_after_expiry = reader.readBool();
                        break;
                    case 11:
                        message.allow_update_after_misbehaviour = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClientState {
            return ClientState.deserialize(bytes);
        }
    }
    export class ConsensusState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            timestamp?: dependency_5.google.protobuf.Timestamp;
            root?: dependency_7.ibc.core.commitment.v1.MerkleRoot;
            next_validators_hash?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
                if ("root" in data && data.root != undefined) {
                    this.root = data.root;
                }
                if ("next_validators_hash" in data && data.next_validators_hash != undefined) {
                    this.next_validators_hash = data.next_validators_hash;
                }
            }
        }
        get timestamp() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 1) as dependency_5.google.protobuf.Timestamp;
        }
        set timestamp(value: dependency_5.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_timestamp() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get root() {
            return pb_1.Message.getWrapperField(this, dependency_7.ibc.core.commitment.v1.MerkleRoot, 2) as dependency_7.ibc.core.commitment.v1.MerkleRoot;
        }
        set root(value: dependency_7.ibc.core.commitment.v1.MerkleRoot) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_root() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get next_validators_hash() {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0)) as Uint8Array;
        }
        set next_validators_hash(value: Uint8Array) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            timestamp?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            root?: ReturnType<typeof dependency_7.ibc.core.commitment.v1.MerkleRoot.prototype.toObject>;
            next_validators_hash?: Uint8Array;
        }): ConsensusState {
            const message = new ConsensusState({});
            if (data.timestamp != null) {
                message.timestamp = dependency_5.google.protobuf.Timestamp.fromObject(data.timestamp);
            }
            if (data.root != null) {
                message.root = dependency_7.ibc.core.commitment.v1.MerkleRoot.fromObject(data.root);
            }
            if (data.next_validators_hash != null) {
                message.next_validators_hash = data.next_validators_hash;
            }
            return message;
        }
        toObject() {
            const data: {
                timestamp?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
                root?: ReturnType<typeof dependency_7.ibc.core.commitment.v1.MerkleRoot.prototype.toObject>;
                next_validators_hash?: Uint8Array;
            } = {};
            if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
            }
            if (this.root != null) {
                data.root = this.root.toObject();
            }
            if (this.next_validators_hash != null) {
                data.next_validators_hash = this.next_validators_hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_timestamp)
                writer.writeMessage(1, this.timestamp, () => this.timestamp.serialize(writer));
            if (this.has_root)
                writer.writeMessage(2, this.root, () => this.root.serialize(writer));
            if (this.next_validators_hash.length)
                writer.writeBytes(3, this.next_validators_hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConsensusState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConsensusState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.timestamp, () => message.timestamp = dependency_5.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.root, () => message.root = dependency_7.ibc.core.commitment.v1.MerkleRoot.deserialize(reader));
                        break;
                    case 3:
                        message.next_validators_hash = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ConsensusState {
            return ConsensusState.deserialize(bytes);
        }
    }
    export class Misbehaviour extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            header_1?: Header;
            header_2?: Header;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("header_1" in data && data.header_1 != undefined) {
                    this.header_1 = data.header_1;
                }
                if ("header_2" in data && data.header_2 != undefined) {
                    this.header_2 = data.header_2;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get header_1() {
            return pb_1.Message.getWrapperField(this, Header, 2) as Header;
        }
        set header_1(value: Header) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_header_1() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get header_2() {
            return pb_1.Message.getWrapperField(this, Header, 3) as Header;
        }
        set header_2(value: Header) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_header_2() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            client_id?: string;
            header_1?: ReturnType<typeof Header.prototype.toObject>;
            header_2?: ReturnType<typeof Header.prototype.toObject>;
        }): Misbehaviour {
            const message = new Misbehaviour({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.header_1 != null) {
                message.header_1 = Header.fromObject(data.header_1);
            }
            if (data.header_2 != null) {
                message.header_2 = Header.fromObject(data.header_2);
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                header_1?: ReturnType<typeof Header.prototype.toObject>;
                header_2?: ReturnType<typeof Header.prototype.toObject>;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.header_1 != null) {
                data.header_1 = this.header_1.toObject();
            }
            if (this.header_2 != null) {
                data.header_2 = this.header_2.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.has_header_1)
                writer.writeMessage(2, this.header_1, () => this.header_1.serialize(writer));
            if (this.has_header_2)
                writer.writeMessage(3, this.header_2, () => this.header_2.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Misbehaviour {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Misbehaviour();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.header_1, () => message.header_1 = Header.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.header_2, () => message.header_2 = Header.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Misbehaviour {
            return Misbehaviour.deserialize(bytes);
        }
    }
    export class Header extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            signed_header?: dependency_2.tendermint.types.SignedHeader;
            validator_set?: dependency_1.tendermint.types.ValidatorSet;
            trusted_height?: dependency_6.ibc.core.client.v1.Height;
            trusted_validators?: dependency_1.tendermint.types.ValidatorSet;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("signed_header" in data && data.signed_header != undefined) {
                    this.signed_header = data.signed_header;
                }
                if ("validator_set" in data && data.validator_set != undefined) {
                    this.validator_set = data.validator_set;
                }
                if ("trusted_height" in data && data.trusted_height != undefined) {
                    this.trusted_height = data.trusted_height;
                }
                if ("trusted_validators" in data && data.trusted_validators != undefined) {
                    this.trusted_validators = data.trusted_validators;
                }
            }
        }
        get signed_header() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.SignedHeader, 1) as dependency_2.tendermint.types.SignedHeader;
        }
        set signed_header(value: dependency_2.tendermint.types.SignedHeader) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_signed_header() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get validator_set() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.types.ValidatorSet, 2) as dependency_1.tendermint.types.ValidatorSet;
        }
        set validator_set(value: dependency_1.tendermint.types.ValidatorSet) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_validator_set() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get trusted_height() {
            return pb_1.Message.getWrapperField(this, dependency_6.ibc.core.client.v1.Height, 3) as dependency_6.ibc.core.client.v1.Height;
        }
        set trusted_height(value: dependency_6.ibc.core.client.v1.Height) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_trusted_height() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get trusted_validators() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.types.ValidatorSet, 4) as dependency_1.tendermint.types.ValidatorSet;
        }
        set trusted_validators(value: dependency_1.tendermint.types.ValidatorSet) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_trusted_validators() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            signed_header?: ReturnType<typeof dependency_2.tendermint.types.SignedHeader.prototype.toObject>;
            validator_set?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
            trusted_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            trusted_validators?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
        }): Header {
            const message = new Header({});
            if (data.signed_header != null) {
                message.signed_header = dependency_2.tendermint.types.SignedHeader.fromObject(data.signed_header);
            }
            if (data.validator_set != null) {
                message.validator_set = dependency_1.tendermint.types.ValidatorSet.fromObject(data.validator_set);
            }
            if (data.trusted_height != null) {
                message.trusted_height = dependency_6.ibc.core.client.v1.Height.fromObject(data.trusted_height);
            }
            if (data.trusted_validators != null) {
                message.trusted_validators = dependency_1.tendermint.types.ValidatorSet.fromObject(data.trusted_validators);
            }
            return message;
        }
        toObject() {
            const data: {
                signed_header?: ReturnType<typeof dependency_2.tendermint.types.SignedHeader.prototype.toObject>;
                validator_set?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
                trusted_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
                trusted_validators?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
            } = {};
            if (this.signed_header != null) {
                data.signed_header = this.signed_header.toObject();
            }
            if (this.validator_set != null) {
                data.validator_set = this.validator_set.toObject();
            }
            if (this.trusted_height != null) {
                data.trusted_height = this.trusted_height.toObject();
            }
            if (this.trusted_validators != null) {
                data.trusted_validators = this.trusted_validators.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_signed_header)
                writer.writeMessage(1, this.signed_header, () => this.signed_header.serialize(writer));
            if (this.has_validator_set)
                writer.writeMessage(2, this.validator_set, () => this.validator_set.serialize(writer));
            if (this.has_trusted_height)
                writer.writeMessage(3, this.trusted_height, () => this.trusted_height.serialize(writer));
            if (this.has_trusted_validators)
                writer.writeMessage(4, this.trusted_validators, () => this.trusted_validators.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Header {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Header();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.signed_header, () => message.signed_header = dependency_2.tendermint.types.SignedHeader.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.validator_set, () => message.validator_set = dependency_1.tendermint.types.ValidatorSet.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.trusted_height, () => message.trusted_height = dependency_6.ibc.core.client.v1.Height.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.trusted_validators, () => message.trusted_validators = dependency_1.tendermint.types.ValidatorSet.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Header {
            return Header.deserialize(bytes);
        }
    }
    export class Fraction extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            numerator?: number;
            denominator?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("numerator" in data && data.numerator != undefined) {
                    this.numerator = data.numerator;
                }
                if ("denominator" in data && data.denominator != undefined) {
                    this.denominator = data.denominator;
                }
            }
        }
        get numerator() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set numerator(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get denominator() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set denominator(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            numerator?: number;
            denominator?: number;
        }): Fraction {
            const message = new Fraction({});
            if (data.numerator != null) {
                message.numerator = data.numerator;
            }
            if (data.denominator != null) {
                message.denominator = data.denominator;
            }
            return message;
        }
        toObject() {
            const data: {
                numerator?: number;
                denominator?: number;
            } = {};
            if (this.numerator != null) {
                data.numerator = this.numerator;
            }
            if (this.denominator != null) {
                data.denominator = this.denominator;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.numerator != 0)
                writer.writeUint64(1, this.numerator);
            if (this.denominator != 0)
                writer.writeUint64(2, this.denominator);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Fraction {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Fraction();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.numerator = reader.readUint64();
                        break;
                    case 2:
                        message.denominator = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Fraction {
            return Fraction.deserialize(bytes);
        }
    }
}
