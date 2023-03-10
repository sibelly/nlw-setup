interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles ={
    width: `${props.progress}%`
  }

  return (
    <div className="h-3  rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progress of the habits completed on this day"
        aria-valuenow={props.progress}
        style={progressStyles}
        className="h-3 tounded-xl bg-violet-600"
      />
    </div>
  )
}