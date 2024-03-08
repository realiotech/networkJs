import { google } from '../proto/google/protobuf/any'
import * as govTx from '../proto/cosmos/gov/v1beta1/tx'
import * as gov from '../proto/cosmos/gov/v1beta1/gov'
import * as coin from '../proto/cosmos/base/v1beta1/coin'

export function createMsgVote(
  proposalId: number,
  option: number,
  sender: string,
) {
  const voteMessage = new govTx.cosmos.gov.v1beta1.MsgVote({
    proposal_id: proposalId,
    voter: sender,
    option,
  })

  return {
    message: voteMessage,
    path: 'cosmos.gov.v1beta1.MsgVote',
  }
}

export function createMsgSubmitProposal(
  content: google.protobuf.Any,
  initialDepositDenom: string,
  initialDepositAmount: string,
  proposer: string,
) {
  const initialDeposit = new coin.cosmos.base.v1beta1.Coin({
    denom: initialDepositDenom,
    amount: initialDepositAmount,
  })

  const proposalMessage = new govTx.cosmos.gov.v1beta1.MsgSubmitProposal({
    content,
    initial_deposit: [initialDeposit],
    proposer,
  })

  return {
    message: proposalMessage,
    path: 'cosmos.gov.v1beta1.MsgSubmitProposal',
  }
}

export function createMsgDeposit(
  proposalId: number,
  depositor: string,
  deposit: {
    denom: string
    amount: string
  },
) {
  const depositCoin = new coin.cosmos.base.v1beta1.Coin({ ...deposit })

  const depositMessage = new govTx.cosmos.gov.v1beta1.MsgDeposit({
    proposal_id: proposalId,
    depositor,
    amount: [depositCoin],
  })

  return {
    message: depositMessage,
    path: 'cosmos.gov.v1beta1.MsgDeposit',
  }
}

export function createMsgTextProposal(title: string, description: string) {
  const textProposalProto = new gov.cosmos.gov.v1beta1.TextProposal({
    title,
    description,
  })

  return {
    message: textProposalProto,
    path: 'cosmos.gov.v1beta1.TextProposal',
  }
}
