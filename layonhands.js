!scriptcard  {{ 
    --#title|Lay On Hands
    --#emoteText|@{selected|token_name} heals @{target|token_name}
    --#titleFontColor|#7E2d40
    --#titleCardBackground|#dcc21d
    --#TitleFontFace|New Century Schoolbook
    --#leftsub|Action
    --#rightsub|Touch
    --#oddRowBackground|#eeeeee
    --#evenRowBackground|#ffffff
    --#sourceToken|@{selected|token_id}
    --#targetToken|@{target|token_id}
    --=ResourceAvail|?{Lay on Hands - @{selected|class_resource} points available}
    --@token-mod|_ids @{target|token_id} _set bar1_value|+[$ResourceAvail]
    --@modbattr| _silent _name @{selected|character_name} _class_resource|-[$ResourceAvail]
    --@roll20AM|_audio,play,nomenu|Cure Light Wounds Spell by Pablo Betancourt
    --+|@{target|token_name} regains [$ResourceAvail] hit points.
     
    }}