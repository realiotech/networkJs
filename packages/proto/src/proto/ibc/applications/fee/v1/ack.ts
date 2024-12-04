// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ibc/applications/fee/v1/ack.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.fee.v1 {
    export class IncentivizedAcknowledgement extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            app_acknowledgement?: Uint8Array;
            forward_relayer_address?: string;
            underlying_app_success?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("app_acknowledgement" in data && data.app_acknowledgement != undefined) {
                    this.app_acknowledgement = data.app_acknowledgement;
                }
                if ("forward_relayer_address" in data && data.forward_relayer_address != undefined) {
                    this.forward_relayer_address = data.forward_relayer_address;
                }
                if ("underlying_app_success" in data && data.underlying_app_success != undefined) {
                    this.underlying_app_success = data.underlying_app_success;
                }
            }
        }
        get app_acknowledgement() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set app_acknowledgement(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get forward_relayer_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set forward_relayer_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get underlying_app_success() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set underlying_app_success(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            app_acknowledgement?: Uint8Array;
            forward_relayer_address?: string;
            underlying_app_success?: boolean;
        }): IncentivizedAcknowledgement {
            const message = new IncentivizedAcknowledgement({});
            if (data.app_acknowledgement != null) {
                message.app_acknowledgement = data.app_acknowledgement;
            }
            if (data.forward_relayer_address != null) {
                message.forward_relayer_address = data.forward_relayer_address;
            }
            if (data.underlying_app_success != null) {
                message.underlying_app_success = data.underlying_app_success;
            }
            return message;
        }
        toObject() {
            const data: {
                app_acknowledgement?: Uint8Array;
                forward_relayer_address?: string;
                underlying_app_success?: boolean;
            } = {};
            if (this.app_acknowledgement != null) {
                data.app_acknowledgement = this.app_acknowledgement;
            }
            if (this.forward_relayer_address != null) {
                data.forward_relayer_address = this.forward_relayer_address;
            }
            if (this.underlying_app_success != null) {
                data.underlying_app_success = this.underlying_app_success;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.app_acknowledgement.length)
                writer.writeBytes(1, this.app_acknowledgement);
            if (this.forward_relayer_address.length)
                writer.writeString(2, this.forward_relayer_address);
            if (this.underlying_app_success != false)
                writer.writeBool(3, this.underlying_app_success);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IncentivizedAcknowledgement {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IncentivizedAcknowledgement();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.app_acknowledgement = reader.readBytes();
                        break;
                    case 2:
                        message.forward_relayer_address = reader.readString();
                        break;
                    case 3:
                        message.underlying_app_success = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IncentivizedAcknowledgement {
            return IncentivizedAcknowledgement.deserialize(bytes);
        }
    }
}
