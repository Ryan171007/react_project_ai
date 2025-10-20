export function formatSize(bytes: number) {
	if(bytes == 0) return "0 bytes";

	const k = 1024;
	const size = ['Bytes', 'KB', 'MB', 'GB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + size[i];
}