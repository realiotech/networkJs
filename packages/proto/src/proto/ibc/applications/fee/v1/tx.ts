// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ibc/applications/fee/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./fee";
import * as dependency_3 from "./../../../core/channel/v1/channel";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.fee.v1 {
    export class MsgRegisterPayee extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            relayer?: string;
            payee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
                if ("relayer" in data && data.relayer != undefined) {
                    this.relayer = data.relayer;
                }
                if ("payee" in data && data.payee != undefined) {
                    this.payee = data.payee;
                }
            }
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get relayer() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set relayer(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get payee() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set payee(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            relayer?: string;
            payee?: string;
        }): MsgRegisterPayee {
            const message = new MsgRegisterPayee({});
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            if (data.relayer != null) {
                message.relayer = data.relayer;
            }
            if (data.payee != null) {
                message.payee = data.payee;
            }
            return message;
        }
        toObject() {
            const data: {
                port_id?: string;
                channel_id?: string;
                relayer?: string;
                payee?: string;
            } = {};
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            if (this.relayer != null) {
                data.relayer = this.relayer;
            }
            if (this.payee != null) {
                data.payee = this.payee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.port_id.length)
                writer.writeString(1, this.port_id);
            if (this.channel_id.length)
                writer.writeString(2, this.channel_id);
            if (this.relayer.length)
                writer.writeString(3, this.relayer);
            if (this.payee.length)
                writer.writeString(4, this.payee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterPayee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterPayee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.port_id = reader.readString();
                        break;
                    case 2:
                        message.channel_id = reader.readString();
                        break;
                    case 3:
                        message.relayer = reader.readString();
                        break;
                    case 4:
                        message.payee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRegisterPayee {
            return MsgRegisterPayee.deserialize(bytes);
        }
    }
    export class MsgRegisterPayeeResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgRegisterPayeeResponse {
            const message = new MsgRegisterPayeeResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterPayeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterPayeeResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgRegisterPayeeResponse {
            return MsgRegisterPayeeResponse.deserialize(bytes);
        }
    }
    export class MsgRegisterCounterpartyPayee extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            relayer?: string;
            counterparty_payee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
                if ("relayer" in data && data.relayer != undefined) {
                    this.relayer = data.relayer;
                }
                if ("counterparty_payee" in data && data.counterparty_payee != undefined) {
                    this.counterparty_payee = data.counterparty_payee;
                }
            }
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get relayer() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set relayer(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get counterparty_payee() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set counterparty_payee(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            relayer?: string;
            counterparty_payee?: string;
        }): MsgRegisterCounterpartyPayee {
            const message = new MsgRegisterCounterpartyPayee({});
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            if (data.relayer != null) {
                message.relayer = data.relayer;
            }
            if (data.counterparty_payee != null) {
                message.counterparty_payee = data.counterparty_payee;
            }
            return message;
        }
        toObject() {
            const data: {
                port_id?: string;
                channel_id?: string;
                relayer?: string;
                counterparty_payee?: string;
            } = {};
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            if (this.relayer != null) {
                data.relayer = this.relayer;
            }
            if (this.counterparty_payee != null) {
                data.counterparty_payee = this.counterparty_payee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.port_id.length)
                writer.writeString(1, this.port_id);
            if (this.channel_id.length)
                writer.writeString(2, this.channel_id);
            if (this.relayer.length)
                writer.writeString(3, this.relayer);
            if (this.counterparty_payee.length)
                writer.writeString(4, this.counterparty_payee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterCounterpartyPayee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterCounterpartyPayee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.port_id = reader.readString();
                        break;
                    case 2:
                        message.channel_id = reader.readString();
                        break;
                    case 3:
                        message.relayer = reader.readString();
                        break;
                    case 4:
                        message.counterparty_payee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRegisterCounterpartyPayee {
            return MsgRegisterCounterpartyPayee.deserialize(bytes);
        }
    }
    export class MsgRegisterCounterpartyPayeeResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgRegisterCounterpartyPayeeResponse {
            const message = new MsgRegisterCounterpartyPayeeResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterCounterpartyPayeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterCounterpartyPayeeResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgRegisterCounterpartyPayeeResponse {
            return MsgRegisterCounterpartyPayeeResponse.deserialize(bytes);
        }
    }
    export class MsgPayPacketFee extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            fee?: dependency_2.ibc.applications.fee.v1.Fee;
            source_port_id?: string;
            source_channel_id?: string;
            signer?: string;
            relayers?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("fee" in data && data.fee != undefined) {
                    this.fee = data.fee;
                }
                if ("source_port_id" in data && data.source_port_id != undefined) {
                    this.source_port_id = data.source_port_id;
                }
                if ("source_channel_id" in data && data.source_channel_id != undefined) {
                    this.source_channel_id = data.source_channel_id;
                }
                if ("signer" in data && data.signer != undefined) {
                    this.signer = data.signer;
                }
                if ("relayers" in data && data.relayers != undefined) {
                    this.relayers = data.relayers;
                }
            }
        }
        get fee() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.applications.fee.v1.Fee, 1) as dependency_2.ibc.applications.fee.v1.Fee;
        }
        set fee(value: dependency_2.ibc.applications.fee.v1.Fee) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_fee() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get source_port_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set source_port_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get source_channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set source_channel_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get signer() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set signer(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get relayers() {
            return pb_1.Message.getFieldWithDefault(this, 5, []) as string[];
        }
        set relayers(value: string[]) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            fee?: ReturnType<typeof dependency_2.ibc.applications.fee.v1.Fee.prototype.toObject>;
            source_port_id?: string;
            source_channel_id?: string;
            signer?: string;
            relayers?: string[];
        }): MsgPayPacketFee {
            const message = new MsgPayPacketFee({});
            if (data.fee != null) {
                message.fee = dependency_2.ibc.applications.fee.v1.Fee.fromObject(data.fee);
            }
            if (data.source_port_id != null) {
                message.source_port_id = data.source_port_id;
            }
            if (data.source_channel_id != null) {
                message.source_channel_id = data.source_channel_id;
            }
            if (data.signer != null) {
                message.signer = data.signer;
            }
            if (data.relayers != null) {
                message.relayers = data.relayers;
            }
            return message;
        }
        toObject() {
            const data: {
                fee?: ReturnType<typeof dependency_2.ibc.applications.fee.v1.Fee.prototype.toObject>;
                source_port_id?: string;
                source_channel_id?: string;
                signer?: string;
                relayers?: string[];
            } = {};
            if (this.fee != null) {
                data.fee = this.fee.toObject();
            }
            if (this.source_port_id != null) {
                data.source_port_id = this.source_port_id;
            }
            if (this.source_channel_id != null) {
                data.source_channel_id = this.source_channel_id;
            }
            if (this.signer != null) {
                data.signer = this.signer;
            }
            if (this.relayers != null) {
                data.relayers = this.relayers;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_fee)
                writer.writeMessage(1, this.fee, () => this.fee.serialize(writer));
            if (this.source_port_id.length)
                writer.writeString(2, this.source_port_id);
            if (this.source_channel_id.length)
                writer.writeString(3, this.source_channel_id);
            if (this.signer.length)
                writer.writeString(4, this.signer);
            if (this.relayers.length)
                writer.writeRepeatedString(5, this.relayers);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgPayPacketFee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgPayPacketFee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.fee, () => message.fee = dependency_2.ibc.applications.fee.v1.Fee.deserialize(reader));
                        break;
                    case 2:
                        message.source_port_id = reader.readString();
                        break;
                    case 3:
                        message.source_channel_id = reader.readString();
                        break;
                    case 4:
                        message.signer = reader.readString();
                        break;
                    case 5:
                        pb_1.Message.addToRepeatedField(message, 5, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgPayPacketFee {
            return MsgPayPacketFee.deserialize(bytes);
        }
    }
    export class MsgPayPacketFeeResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgPayPacketFeeResponse {
            const message = new MsgPayPacketFeeResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgPayPacketFeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgPayPacketFeeResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeResponse {
            return MsgPayPacketFeeResponse.deserialize(bytes);
        }
    }
    export class MsgPayPacketFeeAsync extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            packet_id?: dependency_3.ibc.core.channel.v1.PacketId;
            packet_fee?: dependency_2.ibc.applications.fee.v1.PacketFee;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("packet_id" in data && data.packet_id != undefined) {
                    this.packet_id = data.packet_id;
                }
                if ("packet_fee" in data && data.packet_fee != undefined) {
                    this.packet_fee = data.packet_fee;
                }
            }
        }
        get packet_id() {
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.PacketId, 1) as dependency_3.ibc.core.channel.v1.PacketId;
        }
        set packet_id(value: dependency_3.ibc.core.channel.v1.PacketId) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_packet_id() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get packet_fee() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.applications.fee.v1.PacketFee, 2) as dependency_2.ibc.applications.fee.v1.PacketFee;
        }
        set packet_fee(value: dependency_2.ibc.applications.fee.v1.PacketFee) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_packet_fee() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            packet_id?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketId.prototype.toObject>;
            packet_fee?: ReturnType<typeof dependency_2.ibc.applications.fee.v1.PacketFee.prototype.toObject>;
        }): MsgPayPacketFeeAsync {
            const message = new MsgPayPacketFeeAsync({});
            if (data.packet_id != null) {
                message.packet_id = dependency_3.ibc.core.channel.v1.PacketId.fromObject(data.packet_id);
            }
            if (data.packet_fee != null) {
                message.packet_fee = dependency_2.ibc.applications.fee.v1.PacketFee.fromObject(data.packet_fee);
            }
            return message;
        }
        toObject() {
            const data: {
                packet_id?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketId.prototype.toObject>;
                packet_fee?: ReturnType<typeof dependency_2.ibc.applications.fee.v1.PacketFee.prototype.toObject>;
            } = {};
            if (this.packet_id != null) {
                data.packet_id = this.packet_id.toObject();
            }
            if (this.packet_fee != null) {
                data.packet_fee = this.packet_fee.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_packet_id)
                writer.writeMessage(1, this.packet_id, () => this.packet_id.serialize(writer));
            if (this.has_packet_fee)
                writer.writeMessage(2, this.packet_fee, () => this.packet_fee.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgPayPacketFeeAsync {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgPayPacketFeeAsync();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.packet_id, () => message.packet_id = dependency_3.ibc.core.channel.v1.PacketId.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.packet_fee, () => message.packet_fee = dependency_2.ibc.applications.fee.v1.PacketFee.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeAsync {
            return MsgPayPacketFeeAsync.deserialize(bytes);
        }
    }
    export class MsgPayPacketFeeAsyncResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgPayPacketFeeAsyncResponse {
            const message = new MsgPayPacketFeeAsyncResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgPayPacketFeeAsyncResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgPayPacketFeeAsyncResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeAsyncResponse {
            return MsgPayPacketFeeAsyncResponse.deserialize(bytes);
        }
    }
}
