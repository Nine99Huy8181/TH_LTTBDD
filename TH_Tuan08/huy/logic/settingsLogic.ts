// logic/settingsLogic.ts
export function toggleNotifications(isEnabled: boolean): void {
  console.log('Notifications:', isEnabled ? 'Enabled' : 'Disabled');
  // TODO: Lưu trạng thái vào AsyncStorage hoặc gửi lên server
}

export function toggleDarkMode(isEnabled: boolean): void {
  console.log('Dark Mode:', isEnabled ? 'Enabled' : 'Disabled');
  // TODO: Thay đổi theme ứng dụng
}
