<template>
  <!-- Vote button -->
  <CButton
    color="primary"
    size="lg"
    @click="
      () => {
        confirmProjectVote = true
      }
    "
    >Offset with this project
  </CButton>
  <!-- Initial confirmation modal notification -->
  <CModal
    alignment="center"
    :visible="confirmProjectVote"
    @close="
      () => {
        confirmProjectVote = false
      }
    "
  >
    <CModalHeader
      dismiss
      @close="
        () => {
          confirmProjectVote = false
        }
      "
    >
      <CModalTitle>Please Confirm Your Vote</CModalTitle>
    </CModalHeader>
    <CModalBody>
      You have chosen to vote for the
      <strong>{{ projectName }}</strong
      >. Please confirm that you would like to vote for this project.
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            confirmProjectVote = false
          }
        "
      >
        Cancel
      </CButton>
      <CButton
        color="primary"
        @click="
          () => {
            confirmProjectVote = false
            voucherCodeInput = true
          }
        "
        >Confirm</CButton
      >
    </CModalFooter>
  </CModal>
  <!-- Confirmation modal where user input their voucher code -->
  <CModal
    alignment="center"
    :visible="voucherCodeInput"
    @close="
      () => {
        voucherCodeInput = false
      }
    "
  >
    <CModalHeader
      dismiss
      @close="
        () => {
          voucherCodeInput = false
        }
      "
    >
      <CModalTitle>Please Enter Your Voucher Code</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>To vote for this project, please enter your voucher code.</p>
      <CFormInput
        type="text"
        placeholder="Input voucher code"
        aria-label="voucher code input"
      />
    </CModalBody>
    <CModalFooter>
      <CButton color="primary">Vote</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppVoteConfirmation',
  props: {
    projectName: {
      type: String,
      default: undefined,
      required: true,
    },
  },
  setup() {
    const confirmProjectVote = ref(false)
    const voucherCodeInput = ref(false)

    return {
      confirmProjectVote,
      voucherCodeInput,
    }
  },
}
</script>
