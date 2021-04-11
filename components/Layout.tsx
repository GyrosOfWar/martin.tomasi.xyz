import tw, {styled} from "twin.macro"

interface Props {
  centered?: boolean
}

const Layout = styled.main<Props>(({centered}) => [
    tw`container ml-auto mr-auto px-2 flex flex-col`,
    centered && tw`items-center`
])

export default Layout
