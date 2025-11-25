function strStr(haystack: string, needle: string): number {
    
        if(haystack.length < needle.length ) return -1


        for(let i=0; i <= haystack.length- needle.length; i++ ) {

                if(needle === haystack.slice(i, i + needle.length) ){

                    return i
                } 

        }


        return -1

};