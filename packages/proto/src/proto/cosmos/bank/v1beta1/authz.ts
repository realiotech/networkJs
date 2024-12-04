// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/bank/v1beta1/authz.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_3 from "./../../base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export namespace cosmos.bank.v1beta1 {
    export class SendAuthorization extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            spend_limit?: dependency_3.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("spend_limit" in data && data.spend_limit != undefined) {
                    this.spend_limit = data.spend_limit;
                }
            }
        }
        get spend_limit() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 1) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set spend_limit(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            spend_limit?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): SendAuthorization {
            const message = new SendAuthorization({});
            if (data.spend_limit != null) {
                message.spend_limit = data.spend_limit.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                spend_limit?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.spend_limit != null) {
                data.spend_limit = this.spend_limit.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.spend_limit.length)
                writer.writeRepeatedMessage(1, this.spend_limit, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendAuthorization {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SendAuthorization();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.spend_limit, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SendAuthorization {
            return SendAuthorization.deserialize(bytes);
        }
    }
}
