<template>
  <!-- Vote button -->
  <CButton
    color="primary"
    size="lg"
    @click="
      () => {
        confirmProjectVoteModal = true
      }
    "
    >Offset with this project
  </CButton>
  <!-- Initial confirmation modal notification -->
  <CModal
    alignment="center"
    :visible="confirmProjectVoteModal"
    @close="
      () => {
        confirmProjectVoteModal = false
      }
    "
  >
    <CModalHeader
      dismiss
      @close="
        () => {
          confirmProjectVoteModal = false
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
            confirmProjectVoteModal = false
          }
        "
      >
        Cancel
      </CButton>
      <CButton
        color="primary"
        @click="
          () => {
            confirmProjectVoteModal = false
            voucherCodeInputModal = true
          }
        "
        >Confirm</CButton
      >
    </CModalFooter>
  </CModal>
  <!-- Confirmation modal where user input their voucher code -->
  <CModal
    alignment="center"
    :visible="voucherCodeInputModal"
    @close="
      () => {
        voucherCodeInputModal = false
      }
    "
  >
    <CModalHeader
      dismiss
      @close="
        () => {
          voucherCodeInputModal = false
        }
      "
    >
      <CModalTitle>Please Enter Your Voucher Code</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>To vote for this project, please enter your voucher code.</p>
      <!-- Form to process input of voucher code -->
      <CFormInput
        id="voucher"
        type="number"
        v-model="voucher"
        placeholder="Input voucher code"
        aria-label="voucher code input"
      />
    </CModalBody>
    <CModalFooter>
      <CButton color="primary" @click="submitForm(voucher, $props.projectId)"
        >Vote</CButton
      >
    </CModalFooter>
  </CModal>
</template>

<script>
import { ref } from 'vue'
import useValidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import axios from 'axios'

export default {
  name: 'AppVoteConfirmation',
  props: {
    projectId: {
      type: Number,
      default: -1,
      required: true,
    },
    projectName: {
      type: String,
      default: undefined,
      required: true,
    },
  },
  setup() {
    const confirmProjectVoteModal = ref(false)
    const voucherCodeInputModal = ref(false)

    return {
      confirmProjectVoteModal,
      voucherCodeInputModal,
    }
  },
  data() {
    return {
      v$: useValidate(),
      voucher: null,
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      // TODO: replace these alerts with actual notifications
      if (!this.v$.$error) {
        const updateQuery =
          '?code=' + this.voucher + '&proj_id=' + this.projectId

        axios
          .post('https://13.41.90.193:443/voucher/vote/' + updateQuery)
          .then((response) => console.log(response))

        // Provide user notification
        alert('Your vote has been recorded. Thank you for voting!')
      } else {
        alert(
          'Submission failed. Please ensure you have entered your voucher code!',
        )
      }
      console.log(this.v$)
      console.log(this.voucher)
    },
  },
  validations() {
    return {
      voucher: { required, minLength: minLength(8) },
    }
  },
}
</script>
