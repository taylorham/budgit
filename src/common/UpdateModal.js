import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

const UpdateModal = ({ show, onHide, ModalContent }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <ModalContent onHide={onHide} />
    </Modal>
  )
}

UpdateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  ModalContent: PropTypes.array.isRequired,
}

export default UpdateModal
