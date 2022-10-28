import { createStore } from 'vuex'
// import GAuth from 'vue-google-sheets-oauth2'

// const gauthOption = {
//   clientId: 'brasenosetestuser@brasenosevoterapp.iam.gserviceaccount.com',
//   privateKey:
//     '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQq5CQkbUEBHD2\n6s+vfyUoPASYWQ9O2nkesEl2dTjfzDjaRBCScBn09xh8m7xKoNMgiG9RlRdAqiMd\n2BKyqooxatyIqubh7dGlT5mDNSNQD4dUCOGU8nVEC72Vbo9/Ca3PsLrxWL+ldZAa\nxy7vkZld1KvhTEjmCa+ORvJlcIqZKdah5F0NwLg2bJIAe0sTJ8/mi/9u8+Or85oI\nqlmXDsefJJsZQ9yitiZOWyEcA6TGTIs1gpFU3wjnmGgdr0yACcFkmBm9i/2VXOHM\nmzzPGZMn/NtZwW3BZeMoewyB9ebI8qc1NkmaXc41kv6gwWV2Vjt/THX8tYyXh6l6\n9N9C6KsPAgMBAAECggEAWDe3+c6H2wdvpIvXuqeDk3NwM+Iu7RTC8NzxadGb9k1V\n2by9ztLyvlP6d6+1Vk2QhGf5u+FOf8mN6A+RtBQSMVsumd66llhe8cbprQU5hR7T\nhQzuJXSta9OU1kh0BO6YGz5pgiAVgYNmpVOA/cotrvP6qFiCVzJQFFPdJVKDXcWF\nPv1rZGjrpj6Bq2eBxAWAGlR3NaqwuVjgzNVQyHWXw1oPd5JUI2195JP5P4J1AL1s\nDR1QSZntJy4vmpkZPLobQSPCwynSXn+yn0STlN9G05CokVYO/JK3uQPfSwU5rFNo\nG5v1eHE5+Ez+hn4CCGNK7TsJky/kBlmKSSxO523PPQKBgQDw1Ps5u4ZNBlEPVz8z\nKHj20tS9TvophsHfw32+B0mR9cxjODwLNA8qkykBQ7dxGyZfJHP9+AB7DWFeTDpO\n+vv5N6zLpvMem+M+1FFh4+8mH+j0PGBUg0dab59z5cK0l6Mp3J58EfpFRSyu5XPY\n4s6MEvFKwTSj4NKBMp4hR3yyPQKBgQDd0AcOp08lvtA2UZzqLg52xKDAADgz0pqq\nj42GycdEnKMTUPeFnQn+OtyyFikFgn/sieZUD/OQF5BDewgQnX6LI+o4Y7cyBvzT\nU4KjoPCY6/A3wk1kVlDxdOh5M2TPv2cTGTeaV1Cc4MtLOQldTWI+N9ey5///0Lw9\nA7bzKxZjOwKBgQDScvr57zGj21I4WqBinwpdfczjhME8SoLee6FEzm9uueEaDwkB\nLUPXi3M4pKkHkJcOavdlRjN9VCry0R/e5poLpKg96iznYYfJ3pUjOqA/q4DQ9HWl\nRHa0w3gOOgfT8fJl4WEowDj4EUPDrcR3EXM2mlL6ZS0Py6WHuujN4f9IbQKBgBpz\nPxQxQU/n9B42FzcZrOHeyqh6njkXyRfDrIXBNADriMq54fpN4q4tSLn3yIZ+rFCB\nlTS6/jlVhf92AV0x2rAu5TQ6N9NAYA+3KqHmhCpIIEoV4nKvlFFmtn4VcdUQJvNx\nE19VQCik6bkboRE+NBPlRtRvs+hGdNv1wHA42B+XAoGBAK7qBQzW6dvwIpMxgqUM\nnMpIYs5CvXhyTCUVXXe7wekU9oXeoPyJbjpsLscqoUqHXjrB7jjVyJevPZ/E+G5h\n4Zgqwp4hbBgkUlaZyJ+h2wCy1tkr7wBoemkmpUJjWHkKEbmy35pvTYjo7Ln07DqA\n0sTy33Fd+1NTV0ZnpzBXXX9q\n-----END PRIVATE KEY-----\n',
//   scope: ['https://www.googleapis.com/auth/spreadsheets'],
// }

// Vue.use(GAuth, gauthOption)
// import axios from 'axios'

let scriptId = 'vouchers-api'
let sheetIsAttached = !!document.getElementById(scriptId)

console.log(sheetIsAttached)

const url =
  'https://script.google.com/macros/s/AKfycby566ksAjXOT84i7Hd-FRGw2CWK9E4WRpf5a2sHbQP5dwpC982z-N5LVRSegARjWme-Og/exec'
console.log(url)

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {},
})
