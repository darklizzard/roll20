!scriptcard  {{ 
    --#title|Lay On Hands
    --#emoteText|@{selected|token_name} heals @{target|token_name}
    --#titleFontColor|#FFFFFF
    --#titleCardBackground|#4664b4
    --#TitleFontFace|New Century Schoolbook
    --#leftsub|Long Range
    --#rightsub|50' / 100'
    --#oddrowbackground|#d4cebe
    --#evenrowbackground|#beb49c
    --#sourceToken|@{selected|token_id}
    --#targetToken|@{target|token_id}
    --=ResourceAvail|?{Lay on Hands - @{selected|class_resource} points available}
    --@alter| _target|@{target|token_id} _bar|1 _amount|+[$ResourceAvail]
    --@modbattr| _silent _name @{selected|character_name} _class_resource|-[$ResourceAvail]
    --+Description|Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.
    As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
    Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
    This feature has no effect on undead and constructs.
     
    }}