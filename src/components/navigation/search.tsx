import {IconButton, TextFieldInput, TextFieldRoot, TextFieldSlot} from "@radix-ui/themes";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    const [search, setSearch] = useState("")

    function SearchOnChange(e) {
        setSearch(() => e.target.value)
    }

    function RunSearch() {
        alert(search)
    }

    return (
        <TextFieldRoot style={{}}>
            <TextFieldInput value={search} onChange={SearchOnChange} size="3" variant="classic"
                            placeholder="Поиск..."/>
            <TextFieldSlot>
                <IconButton onClick={RunSearch} size="2" variant="ghost">
                    <SearchIcon className="h-6 w-6"/>
                </IconButton>
            </TextFieldSlot>
        </TextFieldRoot>
    )
}