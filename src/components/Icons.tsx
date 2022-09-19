interface iconProps {
  bgColor?: string
  fontColor?: string
  borderColor?: string
  fillColor?: string
  width: string
  height: string
}

export const PlayIcon = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20.5' cy='20' r='20' fill={bgColor} fillOpacity='0.5' />
    <path
      d='M17.5215 15.3193V25.5321L26.0321 20.4257L17.5215 15.3193Z'
      fill={borderColor}
    />
    <path
      d='M17.5215 15.3193L17.9074 14.6762C17.6757 14.5372 17.3871 14.5336 17.152 14.6667C16.9168 14.7998 16.7715 15.0491 16.7715 15.3193H17.5215ZM17.5215 25.5321H16.7715C16.7715 25.8023 16.9168 26.0516 17.152 26.1848C17.3871 26.3179 17.6757 26.3142 17.9074 26.1752L17.5215 25.5321ZM26.0321 20.4257L26.418 21.0688C26.6439 20.9333 26.7821 20.6892 26.7821 20.4257C26.7821 20.1623 26.6439 19.9181 26.418 19.7826L26.0321 20.4257ZM18.2715 25.5321V15.3193H16.7715V25.5321H18.2715ZM25.6463 19.7826L17.1356 24.889L17.9074 26.1752L26.418 21.0688L25.6463 19.7826ZM17.1356 15.9625L25.6463 21.0688L26.418 19.7826L17.9074 14.6762L17.1356 15.9625Z'
      fill={fillColor}
    />
  </svg>
)

export const StopIcon = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20.5' cy='20' r='20' fill={bgColor} fillOpacity='0.5' />
    <path
      d='M15.8193 15.3193V14.5693C15.4051 14.5693 15.0693 14.9051 15.0693 15.3193H15.8193ZM26.0321 15.3193H26.7821C26.7821 14.9051 26.4463 14.5693 26.0321 14.5693V15.3193ZM26.0321 25.5321V26.2821C26.4463 26.2821 26.7821 25.9463 26.7821 25.5321H26.0321ZM15.8193 25.5321H15.0693C15.0693 25.9463 15.4051 26.2821 15.8193 26.2821V25.5321ZM15.8193 16.0693H26.0321V14.5693H15.8193V16.0693ZM25.2821 15.3193V25.5321H26.7821V15.3193H25.2821ZM26.0321 24.7821H15.8193V26.2821H26.0321V24.7821ZM16.5693 25.5321V15.3193H15.0693V25.5321H16.5693Z'
      fill={borderColor}
    />
    <rect
      x='15.9097'
      y='15.6084'
      width='10.1454'
      height='9.36502'
      fill={fillColor}
    />
  </svg>
)

export const EditIcon = ({
  fillColor = '#8B8B8B',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9.5 17.25C9.08579 17.25 8.75 17.5858 8.75 18C8.75 18.4142 9.08579 18.75 9.5 18.75V17.25ZM18 18.75C18.4142 18.75 18.75 18.4142 18.75 18C18.75 17.5858 18.4142 17.25 18 17.25V18.75ZM1.5 18H0.75C0.75 18.4142 1.08579 18.75 1.5 18.75L1.5 18ZM1.5 14L0.96967 13.4697C0.829018 13.6103 0.75 13.8011 0.75 14H1.5ZM14.5 1L15.0303 0.46967C14.7374 0.176777 14.2626 0.176777 13.9697 0.46967L14.5 1ZM18.5 5L19.0303 5.53033C19.3232 5.23744 19.3232 4.76256 19.0303 4.46967L18.5 5ZM5.5 18V18.75C5.69891 18.75 5.88968 18.671 6.03033 18.5303L5.5 18ZM9.5 18.75H18V17.25H9.5V18.75ZM2.25 18V14H0.75V18H2.25ZM13.9697 1.53033L17.9697 5.53033L19.0303 4.46967L15.0303 0.46967L13.9697 1.53033ZM5.5 17.25H1.5V18.75H5.5V17.25ZM17.9697 4.46967L14.9697 7.46967L16.0303 8.53033L19.0303 5.53033L17.9697 4.46967ZM14.9697 7.46967L4.96967 17.4697L6.03033 18.5303L16.0303 8.53033L14.9697 7.46967ZM2.03033 14.5303L12.0303 4.53033L10.9697 3.46967L0.96967 13.4697L2.03033 14.5303ZM12.0303 4.53033L15.0303 1.53033L13.9697 0.46967L10.9697 3.46967L12.0303 4.53033ZM16.0303 7.46967L12.0303 3.46967L10.9697 4.53033L14.9697 8.53033L16.0303 7.46967Z'
      fill={fillColor}
    />
  </svg>
)

export const CloseIcon = ({
  fillColor = '#707070',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect y='0.5' width='24' height='24' rx='12' fill={fillColor} />
    <path
      d='M16.5303 9.03033C16.8232 8.73744 16.8232 8.26256 16.5303 7.96967C16.2374 7.67678 15.7626 7.67678 15.4697 7.96967L16.5303 9.03033ZM7.46967 15.9697C7.17678 16.2626 7.17678 16.7374 7.46967 17.0303C7.76256 17.3232 8.23744 17.3232 8.53033 17.0303L7.46967 15.9697ZM8.53034 7.96967C8.23745 7.67678 7.76257 7.67678 7.46968 7.96967C7.17678 8.26256 7.17678 8.73744 7.46968 9.03033L8.53034 7.96967ZM15.4697 17.0303C15.7626 17.3232 16.2374 17.3232 16.5303 17.0303C16.8232 16.7374 16.8232 16.2626 16.5303 15.9697L15.4697 17.0303ZM15.4697 7.96967L7.46967 15.9697L8.53033 17.0303L16.5303 9.03033L15.4697 7.96967ZM7.46968 9.03033L15.4697 17.0303L16.5303 15.9697L8.53034 7.96967L7.46968 9.03033Z'
      fill='white'
    />
  </svg>
)
// ProjectNavIcon
export const NavIcon02 = ({
  bgColor = '#CECECE',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 31 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.5' width='30' height='30' rx='15' fill={bgColor} />
    <path
      d='M12.8332 12.3334H18.1665M12.8332 15.0001H16.1665M12.1665 17.6667V21.0001L15.4998 17.6667H20.8332V9.66675H10.1665V17.6667H12.1665Z'
      stroke='white'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)
export const NavIcon03 = ({
  bgColor = '#CECECE',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 31 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.5' width='30' height='30' rx='15' fill={bgColor} />
    <path
      d='M20.8332 21V21.5C21.1093 21.5 21.3332 21.2761 21.3332 21H20.8332ZM10.1665 21H9.6665C9.6665 21.2761 9.89036 21.5 10.1665 21.5V21ZM12.8332 17.5H18.1665V16.5H12.8332V17.5ZM20.3332 19.6667V21H21.3332V19.6667H20.3332ZM10.6665 21V19.6667H9.6665V21H10.6665ZM18.1665 17.5C19.3631 17.5 20.3332 18.4701 20.3332 19.6667H21.3332C21.3332 17.9178 19.9154 16.5 18.1665 16.5V17.5ZM12.8332 16.5C11.0843 16.5 9.6665 17.9178 9.6665 19.6667H10.6665C10.6665 18.4701 11.6366 17.5 12.8332 17.5V16.5ZM17.6665 11.6667C17.6665 12.8633 16.6965 13.8333 15.4998 13.8333V14.8333C17.2487 14.8333 18.6665 13.4156 18.6665 11.6667H17.6665ZM15.4998 13.8333C14.3032 13.8333 13.3332 12.8633 13.3332 11.6667H12.3332C12.3332 13.4156 13.7509 14.8333 15.4998 14.8333V13.8333ZM13.3332 11.6667C13.3332 10.47 14.3032 9.5 15.4998 9.5V8.5C13.7509 8.5 12.3332 9.91776 12.3332 11.6667H13.3332ZM15.4998 9.5C16.6965 9.5 17.6665 10.47 17.6665 11.6667H18.6665C18.6665 9.91776 17.2487 8.5 15.4998 8.5V9.5ZM10.1665 21.5H20.8332V20.5H10.1665V21.5Z'
      fill={fillColor}
    />
  </svg>
)
export const NavIcon04 = ({
  bgColor = '#CECECE',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 31 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.5' width='30' height='30' rx='15' fill={bgColor} />
    <path
      d='M21.3635 12.1971C21.6564 11.9042 21.6564 11.4293 21.3635 11.1364C21.0706 10.8435 20.5958 10.8435 20.3029 11.1364L21.3635 12.1971ZM13.4999 19.0001L12.9696 19.5304C13.2625 19.8233 13.7373 19.8233 14.0302 19.5304L13.4999 19.0001ZM10.6968 15.1364C10.4039 14.8435 9.92906 14.8435 9.63617 15.1364C9.34328 15.4293 9.34328 15.9042 9.63618 16.1971L10.6968 15.1364ZM20.3029 11.1364L12.9696 18.4697L14.0302 19.5304L21.3635 12.1971L20.3029 11.1364ZM9.63618 16.1971L12.9696 19.5304L14.0302 18.4697L10.6968 15.1364L9.63618 16.1971Z'
      fill={fillColor}
    />
  </svg>
)
