<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="'ModalLabel' + id"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
          <h4 class="modal-title" id="'ModalLabel' + id">{{ title }}</h4>
        </div>
        <div>
          <div class="modal-body">
            <p>
              {{ message }}
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
export default {
  name: 'NotificationModal',
  props: {
    id: String,
    title: String,
    message: String,
  },
}
</script>

<style scoped>
@import '@/styles/style.scss';

.modal-title {
  padding-right: 20px;
}
</style>
