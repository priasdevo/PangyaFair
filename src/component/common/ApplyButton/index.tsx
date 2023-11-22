import { useTheme } from '@mui/material'

interface ApplyButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  isDisabled?: boolean
}
const ApplyButton = (props: ApplyButtonProps) => {
  const theme = useTheme()
  return (
    <button
      style={{
        backgroundColor: props.isDisabled
          ? theme.palette.info.dark
          : theme.palette.primary.dark,
        color: theme.palette.text.secondary,
        padding: '10px 14px',
        borderRadius: '12px',
        boxShadow: 'none',
        border: 'none',
        minWidth: '121px',
        alignSelf: 'center',
        cursor: props.isDisabled ? '' : 'pointer',
        fontWeight: 'bolder',
      }}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  )
}

export default ApplyButton
