export const formatDate = (dateString: string, withTime = true) => {
  const date = new Date(dateString)

  // Format tanggal dengan Intl.DateTimeFormat (lokal Indonesia)
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(withTime && {
      hour: '2-digit',
      minute: '2-digit',
    }),
  }).format(date)
}