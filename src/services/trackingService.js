import io from 'socket.io-client';

class TrackingService {
  constructor() {
    this.socket = null;
    this.listeners = {};
  }

  connect() {
    if (!this.socket) {
      this.socket = io(import.meta.env.VITE_SOCKET_URL);
      
      // Reconnect on disconnect
      this.socket.on('disconnect', () => {
        console.log('Disconnected from tracking server');
      });
      
      this.socket.on('connect', () => {
        console.log('Connected to tracking server');
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  joinDeliveryRoom(deliveryId) {
    if (this.socket) {
      this.socket.emit('join-delivery', deliveryId);
    }
  }

  leaveDeliveryRoom(deliveryId) {
    if (this.socket) {
      this.socket.leave(deliveryId);
    }
  }

  onLocationUpdate(callback) {
    if (this.socket) {
      this.socket.on('location-update', callback);
    }
  }

  offLocationUpdate(callback) {
    if (this.socket) {
      this.socket.off('location-update', callback);
    }
  }

  sendLocationUpdate(data) {
    if (this.socket) {
      this.socket.emit('position-update', data);
    }
  }
}

// Export singleton instance
export default new TrackingService();