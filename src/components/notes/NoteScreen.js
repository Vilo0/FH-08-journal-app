import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea">

                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9Au4kI1MDK89jE28pV7EPgudelWfF5OIkw&usqp=CAU" 
                        alt="imagen" 
                    />
                </div>
            </div>

        </div>
    )
}
