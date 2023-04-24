export function useISOString(date) {
  const tzo = -date.getTimezoneOffset()
  const pad = function (num) {
    return (num < 10 ? '0' : '') + num
  }

  return `${date.getFullYear()
  }-${pad(date.getMonth() + 1)
  }-${pad(date.getDate())
  }T${pad(date.getHours())
  }:${pad(date.getMinutes())
  }:${pad(date.getSeconds())
  }.${pad(Math.floor(Math.abs(tzo) / 60))}0Z`
}
